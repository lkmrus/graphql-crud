# <div align="center">GRAPHQL-CRUD<div>

## Installation

Install with npm:

```
sudo npm i knex -g
sh deploy.sh
```

## Environment for production

```
NODE_ENV = production
MYSQL_HOST = your_host
MYSQL_USER = your_user
MYSQL_PASSWORD = your_password
MYSQL_DATABASE = your_dbname
```

## Running the app

```bash
# development
$ npm run dev

# watch mode
$ npm run watch

# production mode
$ npm run start
```

## GraphQL API

`http://localhost:3000/api`

## For example

```
# {
#   getUserList {
#     id
#     name
#     email
#     active
#     username
#   }
#   getUser(id: 44) {
#     id
#     name
#     email
#     active
#     username
#   }
#   getPostList {
#     id
#     user_id
#     title
#     body
#   }
#   getPost(post: {id: 305}) {
#     id
#     user_id
#   }
#   getCommentList {
#     id
#     name
#     post_id
#   }
#   getCommentListByPost(post_id: 10) {
#     id
#     name
#     post_id
#     email
#     body
#   }
# }

# mutation {
#   addUser(user: {username: "ole453gik", email: "test@mail.ru", name: "oleg454"})
#   delUser(id: 1121)
#   updateUser(id: 44, user: {name: "Vasya"})
#   addComment(comment: {name: "asd", post_id: 10, email: "lkmrus@gmail.com"})
#   updateComment(id: 601, comment: {name: "asd", post_id: 10, email: "lkmrus123@gmail.com"})
#   delComment(comment: {id: 603})
#   addPost(post: {user_id: 123, title: "qwerty", body: "asdgffhgsdfgdfsg"})
#   updatePost(id: 301, post: {title: "wodfgdfgdfgn"})
#   delPost(post: {id: 408})
# }

```

