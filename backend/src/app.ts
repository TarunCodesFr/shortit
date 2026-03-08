import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth.route';

export const app = express();
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api', authRoute);
