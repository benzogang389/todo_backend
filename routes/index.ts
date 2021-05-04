import { Application } from 'express';

import task from "./task";
import category from "./category";

function routes(app: Application) {
  app.use('/api/task', task);
  app.use('/api/category', category);
}

export default routes;
