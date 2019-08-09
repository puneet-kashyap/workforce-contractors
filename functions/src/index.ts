import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import products from './routes/products.routes';
import inventory from './routes/inventory.routes';
import { HEALTH_INFO, GENERAL } from './utils/Constants';

const app: express.Application = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get(GENERAL.HEALTH_URL, (req, res): void => {
  res.setHeader('Content-Type', 'application/json')
  res.send(HEALTH_INFO);
});

app.use('/products', products);
app.use('/inventory', inventory);

exports.api = functions.https.onRequest(app);
