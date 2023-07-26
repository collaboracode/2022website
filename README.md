## TODO: Make modal display on welcome submit
- IsOpen attribute in Reactstrap

## Environment variables
 - AWS_ID
 - AWS_KEY
 - ORIGIN
 - TINY_KEY // the api key for TinyMCE 
 - DISCORD_URL // web hook to newcomers integration channel (posts data from welcome fill out form)

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