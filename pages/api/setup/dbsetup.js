import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import client from "../../../utils/clientDB";
// import {
//   DynamoDBDocumentClient,
//   PutCommand
// } from "@aws-sdk/lib-dynamodb";

const userTableName = process.env.USER_TABLE_NAME //'collaboracode-blog-users-dev';
const blogTableName = process.env.BLOG_TABLE_NAME //"collaboracode-blog-2023-dev";


export default async function handler(req, res) {
  
  const userTableCmd = new CreateTableCommand({
    TableName: userTableName,
    AttributeDefinitions: [
      {
        AttributeName: "email",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "email",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  });

  let userResult = await client.send(userTableCmd);

  const blogTableCmd = new CreateTableCommand({
    TableName: blogTableName,
    AttributeDefinitions: [
      /* {
           AttributeName: "author",
           AttributeType: "S",
       },
       {
           AttributeName: "title",
           AttributeType: "S",
       },
       {
           AttributeName: "channel",
           AttributeType: "S",
       },
       {
           AttributeName: "date",
           AttributeType: "S",
       },
       {
           AttributeName: "content",
           AttributeType: "S",
       },
       {
           AttributeName: "draft",
           AttributeType: "BOOL",
       },
       {
           AttributeName: "changed",
           AttributeType: "S",
       },*/
      {
        AttributeName: "id",
        AttributeType: "N",
      }
    ],
    KeySchema: [
      {
        AttributeName: "id",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  });

  let blogResult = await client.send(blogTableCmd);

  return res.status(201).json({ message: "Tables created", userResult, blogResult });
}