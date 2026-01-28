🚀 InsiderJobs – Full Stack Job Portal Application

InsiderJobs is a modern full-stack job portal web application that enables companies to post and manage job listings while allowing candidates to search, filter, and apply for jobs in real time.
The project is built with production-grade architecture, secure authentication, and a clean, scalable backend.
🌐 Live Demo: https://jobs-insider.vercel.app
💼 Real-world use case | Resume-ready project


🌟 Key Features
👨‍💼 Company Features
Company authentication & profile creation
Post new job openings with detailed descriptions
Manage jobs (visibility toggle, update, delete)
View applicant count for each job

👩‍💻 Candidate Features
Browse latest jobs from top companies
Filter jobs by category, location, and experience level
View detailed job descriptions
Apply for jobs
Track applied jobs

🔐 Authentication & Security
Secure authentication using Clerk
Role-based access control (Company / User)
Clerk webhooks for user lifecycle events


🖥️ Tech Stack
Frontend
React.js
Tailwind CSS
React Router
Axios
Backend
Node.js
Express.js
MongoDB & Mongoose
Clerk Authentication
Cloudinary (image uploads)
Sentry (error monitoring)


🧱 Backend Architecture
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
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SENTRY_DSN=your_sentry_dsn


▶️ Run the Project Locally
Backend
cd backend
npm install
npm run dev
Frontend
cd frontend
npm install
npm run dev


🧠 What I Learned from This Project
Designing scalable REST APIs
Implementing role-based authentication
Structuring clean backend architecture
Handling file uploads with Cloudinary
Integrating error monitoring with Sentry
End-to-end full-stack development
Building production-ready CRUD workflows


🚀 Future Improvements
Resume upload & parsing
ML-based job recommendations
Admin analytics dashboard
Email notifications
Saved jobs feature


👩‍💻 Author
Tamanna
📧 Email: tamanna.agy@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/tamanna-136335293/
💻 GitHub: https://github.com/tamannaaa25
🌐 Live App: https://jobs-insider.vercel.app


⭐ If you like this project, don’t forget to star the repo!

