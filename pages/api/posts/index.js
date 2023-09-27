import { getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import client from "../../../utils/clientDB";
// import { authOptions } from 'pages/api/auth/[...nextauth]'
const authOptions = {

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
    /* callbacks: {
         async jwt({ token }) {
             token.userRole = "admin"
             return token
         },
     }, */
}

// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    ScanCommand,
    PutCommand
} from "@aws-sdk/lib-dynamodb";
const tableName = process.env.BLOG_TABLE_NAME//"collaboracode-blog-2023";

/**
 * @param {Request} req
 * @param {Response} res
 */
export default function handler(req, res) {

    const dynamo = DynamoDBDocumentClient.from(client); // <- Think we just need this
    switch (req.method) {
        // GET MEANS READ /posts (READ ALL)
        // PUT Updates
        case 'GET':
            dynamo.send(
                new ScanCommand({

                    TableName: tableName,

                    FilterExpression: "attribute_not_exists(#draft) OR #draft = :val",
                    ExpressionAttributeNames: { "#draft": "draft" },
                    ExpressionAttributeValues: {
                        ":val": false
                    }
                })
            ).then((data) => {
                res.status(200).json(data.Items);
            })
            break;
        // POST CREATE NEW
        case 'POST':
            // console.log(req.body)
            let requestJSON = req.body
            getServerSession(req, res, authOptions).then((session) => {
                console.log('session: ' + JSON.stringify(session));
                console.log('id' + requestJSON.id,
                    'author:' + session.user.name,
                    'title:' + requestJSON.title,
                    'channel:' + requestJSON.channel,
                    'date:' + requestJSON.date,
                    'content:' + requestJSON.content,
                    'draft:' + requestJSON.draft,
                    'changed:' + requestJSON.changed);

                dynamo.send(
                    new PutCommand({
                        TableName: tableName,
                        Item: {
                            id: requestJSON.id,
                            author: session.user.name,
                            title: requestJSON.title,
                            channel: requestJSON.channel,
                            date: requestJSON.date,
                            content: requestJSON.content,
                            draft: requestJSON.draft,
                            changed: requestJSON.changed
                        },
                        // ReturnValues: "ALL_OLD"
                    })
                ).then((data) => {
                    // conso
                    console.log("what is data?", data)
                    res.status(201).json({ json: "test" })//.json(data.Items);
                    // res.end()
                });
            })
                .catch(() => {
                    // Not Signed in
                    res.status(401).json("")
                    // res.end()
                })
            break;
    }
}