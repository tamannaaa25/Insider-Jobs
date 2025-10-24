

Job Portal Application
🚀 Overview
This is a full-stack Job Portal Application designed to connect job seekers with employers. It provides functionalities for both client-side job searching and application and server-side management of companies, users, and job listings, including file uploads via Multer.

The project is structured with a clear separation between the client-side front-end (likely a React application) and the server-side back-end (Node.js/Express).

🛠️ Tech Stack
This project is built using the following core technologies:

Client-Side (Frontend)
React (Inferred from .jsx files in client/src/)
Vite (Inferred from vite.config.js)
Tailwind CSS (Inferred from tailwind.config.js)
JavaScript
Server-Side (Backend)
Node.js & Express (Standard backend environment)
MongoDB (Inferred from "MongoDB connected successfully" in the terminal output)
Mongoose (Likely used for MongoDB object modeling, given models directory)
Multer (Used for handling multipart/form-data, primarily for file uploads, indicated by server/multer.js and commit message)
dotenv (Inferred from terminal output for environment variables)

👤 Key Features (Inferred)
User/Recruiter Authentication: Sign-up and Login.
Job Listing Management: Recruiters can create, view, and manage job posts.
Job Search & Application: Users can browse and apply for jobs.
File Uploads: Integration of Multer for handling attachments (e.g., resume uploads).
Dashboard Views: Separate views for users and recruiters/companies (e.g., client/src/pages/Dashboard.jsx).

