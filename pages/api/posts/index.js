import { getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
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

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    ScanCommand,
    PutCommand
} from "@aws-sdk/lib-dynamodb";
const tableName = "collaboracode-blog-2023";

/**
 * @param {Request} req
 * @param {Response} res
 */
export default function handler(req, res) {
    // console.log(res.body)
    const client = new DynamoDBClient({
        region: "us-west-2", credentials: {
            accessKeyId: process.env.AWS_ID,
            secretAccessKey: process.env.AWS_KEY
        }
    });

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

                    // ScanFilter: {
                    //     "draft": {
                    //         // AttributeValueList: [ {"N": 1} ],
                    //         // ComparisonOperator: "EQ",       
                    //         
                    //     }
                    // }
                })
            ).then((data) => {
                // console.log("\n\nthe data:\n", data.Items)
                res.status(200).json(data.Items);
            })
            //? why does checking for error cause an error!?!?!!!!!!!
            // .error((err) => {
            //     console.log(err);
            //     res.status(200)//.json({err: err});
            // });

            break;
        // POST CREATE NEW
        case 'POST':
            // console.log(req.body)
            let requestJSON = req.body
            getServerSession(req, res, authOptions).then((session) => {
                console.log('session: ' + JSON.stringify(session));

                dynamo.send(
                    new PutCommand({
                        TableName: tableName,
                        Item: {
                            id: requestJSON.id,
                            author: requestJSON.author,
                            title: requestJSON.title,
                            channel: requestJSON.channel,
                            date: requestJSON.date,
                            content: requestJSON.content,
                            draft: requestJSON.draft,
                            changed: requestJSON.changed
                        }
                    })
                ).then((data) => {
                    // conso
                    res.status(201).json(data.Items);
                    // res.end()
                }).catch((error) => {
                    console.log(JSON.stringify(error));
                   res.status(500).json(error);
                }); // I assume the post is similar
                // } else {
            })
                .catch(() => {
                    // Not Signed in
                    res.status(401).json("")
                    // res.end()
                })

            break;


    }

    // res.status(200).json([
    //                 { id: 1, author: 'collabadmin', title: 'First Post', channel: 'main', content: 'I am not sure I have anything to say.'}, 
    //                 { id: 2, author: 'guest', title: 'Second Post', channel: 'main',  content: 'This is a great second article. I think you all will love this very much.'}
    //             ]);
}