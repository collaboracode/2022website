## TODO: Make modal display on welcome submit - this is done
## TODO: upgrade to nextjs 13 and get cookies working
## TODO: improve migrations system
- something to help https://radzion.medium.com/migrations-in-dynamodb-b6c9b1099f31
## TODO: Break out NAV into separate components
## TODO: Break out footer
## TODO: Break out header into separate components
- IsOpen attribute in Reactstrap

## Environment variables
 - AWS_ID
 - AWS_KEY
 - ORIGIN
 - TINY_KEY // the api key for TinyMCE 
 - DISCORD_URL // web hook to newcomers integration channel (posts data from welcome fill out form)
 - ENVIRONMENT = 'TEST' || 'PROD' // used to determine which dynamo connection to use
 - DYNAMOURL = 'http://localhost:8000' || 'https://dynamodb.us-west-2.amazonaws.com' // used to determine which dynamo connection to use
## DB schemas
### blog
```
  id: number,
  author: string,
  title: stirng,
  channel: string
  date: Date,
  content: text,
  draft: bool,
  changed: Date
```

### user
```
  username: string
  email: string
  password: string
  roles: {"editor": false, "poster": false, "admin": false,} // defaults
```