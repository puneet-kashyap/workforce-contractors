import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import { setupRoutes } from './routes/index';
import { HEALTH_INFO, GENERAL } from './utils/Constants';

const app: express.Application = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get(GENERAL.HEALTH_URL, (req, res): void => {
  res.setHeader('Content-Type', 'application/json')
  res.send(HEALTH_INFO);
});


setupRoutes(app);

exports.api = functions.https.onRequest(app);
