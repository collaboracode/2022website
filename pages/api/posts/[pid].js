import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,

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



  //res.status(200).json({ id: 1, author: 'collabadmin', title: 'First Post', channel: 'main', content: 'I am not sure I have anything to say.' })
}
