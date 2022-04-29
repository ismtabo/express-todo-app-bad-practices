# express-todo-app-bad-practices

There are a lot of magic here 🪄

You have to assume that this repo will grown in a near future and will should be (almost) production-ready.
Feel free to modify/add/delete files, folders, packages, endpoints, functions, classes... Whatever you want 😀

## Dependencies
- NodeJS (+v16): https://nodejs.org/es/download/

## Documentation
The [doc](./doc/) folder contains the Swagger specification for the project.

## Configuration

To configure the server create a file called `.env` based on file `dotenv.template` with following configuration:

| Environment variable | Type             | Description                         |
| :------------------- | :--------------- | :---------------------------------- |
| SERVER_PORT          | string or number | Server exposed port (default: 8000) |

## How to run
First, install node dependencies by running:
```
npm install
```

Run local development server by using following command, this will start a server in configured port.
```
npm run serve
```

## Run test
Jest test can be run by using following command:
```
npm test
```

## Lint and format
This project uses Eslint and Prettier for both code linting and format. These tools can be used with following commands:
```bash
# Check code lint
npm run lint
# Check code format
npm run check:format
# Fix code format
npm run format
```
