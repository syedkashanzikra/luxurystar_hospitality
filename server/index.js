import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
dotenv.config();
connectDB();


const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());


//cors
// Allow requests from the frontend
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api', contactRoutes);
// Server start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
