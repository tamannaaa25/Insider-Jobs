import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume, registerUser, loginUser } from '../controllers/userController.js'
import upload from '../config/multer.js'
import { protectUser } from '../middlewares/authMiddleware.js'

const router = express.Router()

// Register a user
router.post('/register', upload.single('image'), registerUser)

// Login a user
router.post('/login', loginUser)

// Get user data
router.get('/user', protectUser, getUserData)

// Apply for a job
router.post('/apply', protectUser, applyForJob)

// Get a applied jobs data
router.get('/applications', protectUser, getUserJobApplications)

// update user profile
router.post('/update-resume', protectUser, upload.single('resume'), updateUserResume)

export default router