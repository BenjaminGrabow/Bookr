# Bookr

Bookr is a app where you can buy and compare books.

The Application is live [here](https://bookr-build-week.herokuapp.com/).

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
        username: "username", => accepts any string from 1 - 32 chars 
        password: "password" => accepts any string from 1 - 32 chars
}

```

Response spec:

```
{
    "id": 2,
    "username": "username"
}

```

### POST /auth/login

Request spec:

```
{
  email: 'username',
  password: 'password'
  
}
```

Response spec:

```
{
    "message": "Welcome username !, have a token...",
    "token": "eyJhbGciOiJIUzI1NiIsInR5ctzuCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJiZWZnZGZ",
    "id": 10
}

```