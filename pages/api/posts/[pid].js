import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  DeleteCommand

} from "@aws-sdk/lib-dynamodb";
const tableName = "collaboracode-blog-2023";

export default function handler(req, res) {

  const client = new DynamoDBClient({
    region: "us-west-2", credentials: {
      accessKeyId: process.env.AWS_ID,
      secretAccessKey: process.env.AWS_KEY
    }
  });


  const params = {
    /** input parameters */
  }

  const dynamo = DynamoDBDocumentClient.from(client); // <- Think we just need this
  // We do need params somewhere to add

  const { pid } = req.query
  console.log(pid)
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




  //res.status(200).json({ id: 1, author: 'collabadmin', title: 'First Post', channel: 'main', content: 'I am not sure I have anything to say.' })
}
