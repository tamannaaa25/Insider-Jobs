import JobApplication from "../models/JobApplication.js"
import User from "../models/User.js"
import Job from '../models/Job.js'
import { v2 as cloudinary } from "cloudinary"
import bcrypt from 'bcrypt'
import generateToken from "../utils/generateToken.js"

// Register a new user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    const imageFile = req.file

    if (!name || !email || !password) {
        return res.json({ success: false, message: "Missing Details" })
    }

    try {
        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.json({ success: false, message: 'User already registered' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        let imageUrl = ""
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path)
            imageUrl = imageUpload.secure_url
        }

        const user = await User.create({
            name,
            email,
            password: hashPassword,
            image: imageUrl
        })

        res.json({
            success: true,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                image: user.image,
                resume: user.resume
            },
            token: generateToken(user._id)
        })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'Invalid email or password' })
        }

        if (await bcrypt.compare(password, user.password)) {
            res.json({
                success: true,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    resume: user.resume
                },
                token: generateToken(user._id)
            })
        } else {
            res.json({ success: false, message: 'Invalid email or password' })
        }

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//  Get user Data 
export const getUserData = async(req,res) => {
    try {
        const userId = req.user._id
        
        const user = await User.findById(userId).select('-password')
        
        if (!user) {
            return res.json({success:false,message:'User Not Found'})
        }
        
        res.json({success:true,user})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// Apply For a Job

export const applyForJob = async(req,res) => {
    const { jobId } = req.body

    const userId = req.user._id

    try {
        const isAlreadyApplied = await JobApplication.find({jobId,userId})
        if (isAlreadyApplied.length > 0) {
            return res.json({success:false,message:'Already Applied'})
        }
        const jobData = await Job.findById(jobId)

        if (!jobData) {
            return res.json({success:false,message:'job not found'})
        }

        // Create job application
        await JobApplication.create({
            companyId:jobData.companyId,
            userId,
            jobId,
            date: Date.now()
        })

        // Add userId to job's applicants array
        await Job.findByIdAndUpdate(jobId, {
            $addToSet: { applicants: userId }
        })

        // Add jobId to user's appliedJobs array
        await User.findByIdAndUpdate(userId, {
            $addToSet: { appliedJobs: jobId }
        })

        res.json({success:true,message:'Applied Successfully'})

    } catch (error) {
        res.json({success:false,message:error.message})
    }

}

// Get user applied applications 
export const getUserJobApplications = async(req,res) => {
    try {
        const userId = req.user._id

        const applications = await JobApplication.find({userId})
        .populate('companyId','name email image')
        .populate('jobId','title description location category level salary')
        .exec()

        if (!applications) {
            return res.json({success:false,message:'No job application found for this user'})
        }
        return res.json({success:true,applications})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// Update user profile (resume)
export const updateUserResume = async(req,res) => {
    try {
        const userId = req.user._id

        const resumeFile = req.file

        const userData = await User.findById(userId)

        if (resumeFile) {
            const resumeUpload = await cloudinary.uploader.upload(resumeFile.path)
            userData.resume = resumeUpload.secure_url
        }

        await userData.save()

        return res.json({success:true,message:'Resume Updated'})

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}