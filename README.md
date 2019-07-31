# Bookr

Bookr is a app where you can buy and compare books.

The Application is live here 

## Installation

### Clone this repository and navigate into it

git clone https://github.com/bw-expat-journal/Back-End.git && cd Back-End

### Install dependencies

npm install

### Add Neccessary Environment Variables
Edit the .env.sample file to add:

*A jsonwebtoken secret to encrypt jsonwebtoken

*Port number where the server can listen on

After that rename the file to .env

### Start the application
npm run start

|     Method | Functionality        | Endpoint      |
| ---------- | -------------        | ----------    |
| POST       |Create a user account | /auth/register|
| POST       |Login a user          | /auth/login   |