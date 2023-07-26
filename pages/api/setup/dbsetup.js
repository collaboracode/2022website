import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    PutCommand
} from "@aws-sdk/lib-dynamodb";

const userTableName = 'collaboracode-blog-users';
const blogTableName = "collaboracode-blog-2023";


export default function handler(req, res) {
    const client = new DynamoDBClient({
        region: "us-west-2", credentials: {
            accessKeyId: process.env.AWS_ID,
            secretAccessKey: process.env.AWS_KEY
        }
    });

    const userTableCmd = new CreateTableCommand({
        TableName: userTableName,
        AttributeDefinitions: [
            {
              AttributeName: "username",
              AttributeType: "S",
            },
            {
              AttributeName: "password",
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
    
    const blogTableCmd = new CreateTableCommand({
        TableName: userTableName,
        AttributeDefinitions: [
            {
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
            },
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "N",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
    });
}