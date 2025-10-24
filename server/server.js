import './config/instrument.js';
import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import * as Sentry from '@sentry/node';
import companyRoutes from './routes/companyRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectCloudinary from './config/cloudinary.js';

dotenv.config();

const app = express();

const startServer = async () => {
    try {
        await connectDB();
        await connectCloudinary();

        // --- Middleware ---
        app.use(express.json());
        app.use(cors({
            origin: ['http://localhost:5173', 'https://insider-jobs-t71h.onrender.com'],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            credentials: true
        }));

        // --- Routes ---
        app.use('/api/company', companyRoutes);
        app.use('/api/jobs', jobRoutes);
        app.use('/api/users', userRoutes);
        app.get('/', (req, res) => res.send("Hello world"));

        // --- Error handling ---
        Sentry.setupExpressErrorHandler(app);

        // --- Server ---
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error("Server failed to start:", error);
        process.exit(1);
    }
};

startServer();