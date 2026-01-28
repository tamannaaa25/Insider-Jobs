🧑‍💼 InsiderJobs – Full Stack Job Portal Application
InsiderJobs is a full-stack job portal web application that allows companies to post jobs and users to search, filter, and apply for jobs seamlessly. The platform includes role-based access, real-time job management, and a modern UI, built with a scalable backend and secure authentication.

🚀 Features

👨‍💼 For Companies
Company authentication & profile management
Post new jobs with detailed descriptions
Manage jobs (visibility toggle, update, delete)
View number of applicants per job

👩‍💻 For Job Seekers
Browse latest jobs from top companies
Filter jobs by category, location, and level
View detailed job descriptions
Apply for jobs
Track applied jobs

🔐 Authentication & Security
Clerk authentication (users & companies)
Secure webhooks for user lifecycle events
Role-based access control

🖥️ Tech Stack
Frontend
React.js
Tailwind CSS
React Router
Axios
Backend
Node.js
Express.js
MongoDB + Mongoose
Clerk Authentication
Cloudinary (image uploads)
Sentry (error monitoring)

📁 Backend Architecture
backend/
├── config/
│   ├── db.js
│   ├── cloudinary.js
│   └── instrument.js
├── controllers/
│   ├── webhooks.js
│   ├── jobController.js
│   ├── companyController.js
│   └── userController.js
├── routes/
│   ├── jobRoutes.js
│   ├── companyRoutes.js
│   └── userRoutes.js
├── models/
│   ├── Job.js
│   ├── Company.js
│   └── User.js
├── server.js
└── .env

⚙️ Environment Variables
Create a .env file in the backend directory:
PORT=5001
MONGO_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SENTRY_DSN=your_sentry_dsn

▶️ Run Locally
Backend
cd backend
npm install
npm run dev
Frontend
cd frontend
npm install
npm run dev

🧠 Key Learnings
Building scalable REST APIs
Role-based authentication using Clerk
Handling file uploads with Cloudinary
Production-grade error monitoring with Sentry
Clean backend architecture & modular routing
Full-stack deployment readiness

✨ Future Enhancements
Resume upload & parsing
Job recommendations using ML
Admin analytics dashboard
Email notifications
Saved jobs feature

👩‍💻 Author
Tamanna
📧 tamanna.agy@gmail.com
🔗 LinkedIn
💻 GitHub
