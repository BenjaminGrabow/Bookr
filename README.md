# Bookr

Bookr is a app where you can buy and compare books.

The Application is live here 

## Installation

### Clone this repository and navigate into it

git clone https://github.com/BenjaminGrabow/Bookr.git && cd Bookr

### Install dependencies

npm install

### Add Neccessary Environment Variables
Edit the .env.sample file to add:

- A jsonwebtoken secret to encrypt jsonwebtoken

- Port number where the server can listen on

After that rename the file to .env

### Start the application
npm run start

|     Method | Functionality              | Endpoint      |
| ---------- | -------------              | ----------    |
| POST       |Create a user account       | /auth/register|
| POST       |Login a user                | /auth/login   |
| GET        | Get all books              | /             |
| GET        | Get book by Id with reviews| /:id          |
| POST       |Create new book             | /             |
| PUT        | Update book                | /:id          |
| DELETE     |Delete booke                | /:id          |
| POST       |Buy a book / Stripe payment | /payment      |
| GET        |Get user preference by Id   | /user/:id     |
| POST       |Create new user preference  | /user         |
| PUT        |Update user preference      | /user/:id     |
//Postman documentation automatically

## Request and Response Specifications

### POST /auth/register

Request spec:

```
{
  {
        username:"beddtddddddddddddddddddddrzun",
        password: "BEtdddddddddddddddrzuN"
}
  email: 'example@email.com',
  password: 'accepts any string from 6-32 chars',
  confirm_password: 'accepts any string from 6-32 chars',
  first_name: 'accepts letters from 2 -50 chars',
  last_name: 'accepts letters from 2 -50 chars',
}
```

Response spec:

```
{
    "user": {
        "id": 5,
        "email": "example@gmail.com",
        "first_name": "Name",
        "last_name": "Example",
        "is_admin": false || true
    },
    "token": "yuyujhjiiGHJIKKHJhHJhKhnbGHj.eyJ1c2VySWQiOjUsImlzX2FkbWluIjpmYWxzZSwiaWF0IjoxNTY0NDk1OTg4LCJleHAiOjE1NjUxMDA3ODh9.SgCpomiiiioidhjdfI"
}
```

### POST /auth/login

Request spec:

```
{
  email: 'example@email.com',
  password: 'accepts any string from 6-32 chars'
}
```

Response spec:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.hgjgkgooopooooopoKNHIOKKLOHHhoooooooo._7_DcsvIG6XlqRtmoqX3NmWnkREkFfkqswtmkCo1O2M",
    "user": {
        "id": 5,
        "email": "haywhyze@gmail.com",
        "is_admin": false,
        "first_name": "Yusuf",
        "last_name": "Ayo"
    }
}

```