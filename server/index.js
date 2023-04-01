import express from 'express';
import recipesRouter from './routes/recipesRoutes.js';

// init express application
const app = express();

// process routes
app.use('/api/recipes', recipesRouter);

// run express on the port and listen to the port
const PORT = 5000;
app.listen(PORT, () => {});