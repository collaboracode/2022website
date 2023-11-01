import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
const client = process.env.ENV === 'DEV' ?
  // local version
  new DynamoDBClient({
    endpoint: "http://localhost:8000",
    region: "localhost",
  }) :
  // live version
  new DynamoDBClient({
    region: "us-west-2", credentials: {
      accessKeyId: process.env.AWS_ID,
      secretAccessKey: process.env.AWS_KEY
    }
  });

/** @type {DynamoDBClient} */
export default client