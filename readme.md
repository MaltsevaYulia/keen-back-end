## BackEnd for Keenethics

This is a  server part fore REST-api based application for performing CRUD opeartions on database for a company that provides bicycle booking services

Read more about client side https://github.com/MaltsevaYulia/keen-front-end

Fork this repository

## Stack

- *Back-end*: Node.js / Express / Mongoose
- *Database*: MongoDB

### Installation of dependencies
- `npm i`

### Add the necessary keys to the .env:
- MONGO_URL=
- PORT=

### Available Scripts:

- `npm start` &mdash; server start in production mode
- `npm run start:dev` &mdash; start the server in development mode
- `npm run lint` &mdash; run a code check run with eslint, must run before each PR and fix all linter errors
- `npm lint:fix` &mdash; the same linter check, but with automatic fixes for simple errors