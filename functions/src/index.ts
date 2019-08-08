import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import products from './routes/products.routes';
import { HEALTH_INFO } from './utils/Constants';

const app: express.Application = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/health', (req, res): void => {
  res.setHeader('Content-Type', 'application/json')
  res.send(HEALTH_INFO);
});

app.use('/products', products);

exports.api = functions.https.onRequest(app);
