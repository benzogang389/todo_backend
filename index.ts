import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import connectDB from './config/db';
import routes from './routes/index';

const swaggerDocument = YAML.load('./swagger.yaml');

dotenv.config();

const { PORT, DEV_CLIENT_URL } = process.env;

const app = express();

const corsOptions = {
  origin: [DEV_CLIENT_URL as string],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app);

connectDB();

if (require.main === module) {
  try {
    app.listen(Number(PORT) || 9090, '0.0.0.0', () => {
      console.warn(`API server listening on port ${PORT || 9090}`);
    });
  } catch (error) {
    console.error(error);
  }
}
