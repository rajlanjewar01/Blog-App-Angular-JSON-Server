
# Blog App Angular JSON-Server 
Live link: (https://blog-app-angular-json-server.vercel.app/) deployed with Vercel.com

## Prerequisite:
#### JSON-Server (Get a full fake REST API for local development)<br>
https://github.com/typicode/json-server<br>

-install json server:
```
npm install -g json-server
```

-Create a db.json file with some data: <br>
example: 
```
{
    "posts": 
    [
      { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": 
    [
      { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile":  
      { "name": "typicode" }
}
 ```

-Start JSON Server <br>
```
json-server --watch db.json
```

