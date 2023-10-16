import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import client from "../../../utils/clientDB";
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
  getServerSession(req, res, authOptions).then(session => {
      dynamo.send(
        new ScanCommand({
          TableName: process.env.BLOG_TABLE_NAME,
          FilterExpression: "#draft = :val AND #author = :val2",
          ExpressionAttributeNames: { "#draft": "draft", "#author": "author" },
          ExpressionAttributeValues: {
            ":val": true,
            ":val2": session?.user ? session.user.name : false // todo test this
          }
        })
      ).then((data) => {
        res.status(200).json(data.Items);
      })
  })

      // break;
  }
}