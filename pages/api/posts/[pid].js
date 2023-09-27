// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import client from "../../../utils/clientDB";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  DeleteCommand

} from "@aws-sdk/lib-dynamodb";
const tableName = process.env.BLOG_TABLE_NAME//"collaboracode-blog-2023";

export default function handler(req, res) {
  const dynamo = DynamoDBDocumentClient.from(client); // <- Think we just need this
  const { pid } = req.query
  
  // need to break this into GET, DELETE and PUT (update)
  let requestJSON = {};

  switch (req.method) {
    case 'PUT':
      requestJSON = JSON.parse(req.body)
      dynamo.send(
        new PutCommand({
          TableName: tableName,
          Item: {
            id: parseInt(pid),
            author: requestJSON.author,
            title: requestJSON.title,
            channel: requestJSON.channel,
            date: requestJSON.date,
            content: requestJSON.content,
            changed: requestJSON.changed,
            draft: requestJSON.draft
          }
        })
      ).then((data) => {
        res.status(200).json(data.Items);
      })

      break
    case 'GET':
      console.log("here!!")
      dynamo.send(
        new GetCommand({
          TableName: tableName,
          Key: {
            id: parseInt(pid),
            channel: 'main'
          },
        })
      ).then((data) => {
        res.status(200).json(data.Item);
      });
      break

    case 'DELETE': // Exterminate, Exterminate! Exterminate!!!
      console.log(req.body);
      // requestJSON = JSON.parse(req.body)
      dynamo.send(
        new DeleteCommand({
          TableName: tableName,
          Key: {
            id: parseInt(pid),
            channel: 'main'
          }
        })
      ).then((data) => {
        res.status(204).json() // #204 == no content
        console.log(data);
      })
      break
  }
}