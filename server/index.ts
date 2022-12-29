import express, { Express, Request, Response } from 'express';

const app: Express = express();
const http = require('http').Server(app);

app.get('/test', (req: Request, res: Response) => {
  console.log('HEHEHEHEHEHE');
  res.status(200).end();
});

http.listen(4040, () => {
  console.log(`listening at http://localhost:${4040}`);
});
