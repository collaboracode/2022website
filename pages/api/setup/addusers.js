import client from "../../../utils/clientDB";
import {
    DynamoDBDocumentClient,
    ScanCommand,
    PutCommand
} from "@aws-sdk/lib-dynamodb";

const userTableName = process.env.USER_TABLE_NAME //'collaboracode-blog-users-dev';
const blogTableName = process.env.BLOG_TABLE_NAME //"collaboracode-blog-2023-dev";

export default async function handler(req, res) {

    const dynamo = DynamoDBDocumentClient.from(client);
    // Add default users to populate users database
    let u1Result = await dynamo.send(
        new PutCommand({
            TableName: userTableName,
            Item: {
                username: 'dgalen',
                email: 'derek@collaboracode.org',
                password: 'UNUSED',
                roles: {
                    "editor": true,
                    "poster": true,
                    "admin": true,
                }
            },
        })
    );

    let u2Result = await dynamo.send(
        new PutCommand({
            TableName: userTableName,
            Item: {
                username: 'kobalt-solutions',
                email: 'matt@collaboracode.org',
                password: 'UNUSED',
                roles: {
                    "editor": true,
                    "poster": true,
                    "admin": true,
                }
            },
        })
    );

    const u3Result = await dynamo.send(
        new PutCommand({
            TableName: userTableName,
            Item: {
                username: 'SOUPernova',
                email: 'kielpinski.michael@gmail.com',
                password: 'UNUSED',
                roles: {
                    "editor": true,
                    "poster": true,
                    "admin": true,
                }
            },
        })
    );

    const u4Result = await dynamo.send(
        new PutCommand({
            TableName: userTableName,
            Item: {
                username: 'wild-o',
                email: 'alarias1@outlook.com',
                password: 'UNUSED',
                roles: {
                    "editor": true,
                    "poster": true,
                    "admin": true,
                }
            },
        })
    );

    return res.status(201).json({ message: "Users Added", userResults:[u1Result, u2Result, u3Result, u4Result] });
};

/*
  username: string
  email: string
  password: string
  roles: {"editor": false, "poster": false, "admin": false,} // defaults
  */