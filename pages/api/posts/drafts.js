import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
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
}
export default function handler(req, res) {
  const dynamo = DynamoDBDocumentClient.from(client); // <- Think we just need this
  switch (req.method) {
    // GET MEANS READ /posts (READ ALL)
    // PUT Updates
    case 'GET':
      dynamo.send(
        new ScanCommand({

          TableName: process.env.BLOG_TABLE_NAME,

          FilterExpression: "#draft = :val",
          ExpressionAttributeNames: { "#draft": "draft" },
          ExpressionAttributeValues: {
            ":val": true
          }
        })
      ).then((data) => {
        res.status(200).json(data.Items);
      })
      break;
  }
}