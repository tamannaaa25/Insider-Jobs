import jwt from 'jsonwebtoken'
import Company from '../models/Company.js'
import User from '../models/User.js'

// Middleware ( Protect Company Routes )
export const protectCompany = async (req,res,next) => {

    // Getting Token Froms Headers
    const token = req.headers.token

    
    if (!token) {
        return res.json({ success:false, message:'Not authorized, Login Again'})
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.company = await Company.findById(decoded.id).select('-password')

        next()

    } catch (error) {
        res.json({success:false, message: error.message})
    }

}

// Protect User Routes - Uses JWT authentication
export const protectUser = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        return res.json({ success: false, message: 'Not authorized, Login Again' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.json({ success: false, message: 'User not found' });
        }

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};