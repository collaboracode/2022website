## TODO: finish working on auth
- add backend checks for roles
- finish db adapter for next auth

## TODO: Make modal display on welcome submit - this is done
## TODO: upgrade to nextjs 13 and get cookies working
## TODO: improve migrations system
- something to help https://radzion.medium.com/migrations-in-dynamodb-b6c9b1099f31
## TODO: Break out NAV into separate components
## TODO: Break out footer
## TODO: Break out header into separate components
- IsOpen attribute in Reactstrap

## TODO: get drafts on nav to update when saving new drafts, and posting old ones

## Environment variables
 - AWS_ID
 - AWS_KEY
 - ORIGIN
 - TINY_KEY // the api key for TinyMCE (for dev, but for prod we should register the domain)
 - DISCORD_URL // web hook to newcomers integration channel (posts data from welcome fill out form)
 - ENVIRONMENT = 'TEST' || 'PROD' // used to determine which dynamo connection to use
 - DYNAMOURL = 'http://localhost:8000' || 'https://dynamodb.us-west-2.amazonaws.com' // used to determine which dynamo connection to use
 - GITHUB_CLIENT_ID 
 - GITHUB_CLIENT_SECRET
 - NEXTAUTH_SECRET //$ openssl rand -base64 32
 - USER_TABLE_NAME dynamoDB table name
 - BLOG_TABLE_NAME dynamoDB table name
 - ENV (DEV for local db development)

 ## start up localDB
 - make sure docker and docker-compose (version 3.3) are installed
 - run docker-compose up
 - (should refactor this to run a shell script to init the tables) visit /api/setup/dbsetup to create tables
## DB schemas
### blog
```
  id: number,
  author: string,
  title: string,
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

### DynamoAdapter for NextAuth DB