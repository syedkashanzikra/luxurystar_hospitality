import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { protect } from "./middleware/authMiddleware.js";
import { isAdmin, isStaff, isCustomer } from "./middleware/roleMiddleware.js";


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
app.use('/api/users', userRoutes);

// This is only Example for how to use role based middleware
// app.use("/api/admin", protect, isAdmin, adminRoutes);
// app.use("/api/staff", protect, isStaff, staffRoutes);
// app.use("/api/customer", protect, isCustomer, customerRoutes);



// Server start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
