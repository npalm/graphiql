
import express from 'express';
import {
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';

const PORT = 4000;
const server = express();



server.use('/', graphiqlExpress({
  endpointURL: process.env.API_URL
}));


server.listen(PORT, () =>
  console.log(`GraphiQL is now running on http://localhost:${PORT}`)
);
