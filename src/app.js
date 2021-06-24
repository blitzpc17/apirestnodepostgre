import express, {json} from 'express';
import morgan from 'morgan';

const app = express();

//Importing routes
import projectRoutes from './routes/projects';

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects',projectRoutes);

export default app;