import * as express from 'express';

import products from './products.routes';
import inventory from './inventory.routes';

export const setupRoutes = (server: express.Application) => {
  server.use('/products', products);
  server.use('/inventory', inventory);
}