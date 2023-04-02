import express from 'express';
import recipesRouter from './routes/recipesRoutes.js';
import dotenv from 'dotenv';
import { DBconnect } from './config/db.js';
import { config } from './config/index.js';

dotenv.config();

// init express application
const app = express();
const PORT = config.server.port || 5000;

DBconnect();

// process routes
app.use('/api/recipes', recipesRouter);

// run express on the port and listen to the port
app.listen(PORT, () => {});