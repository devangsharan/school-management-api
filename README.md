School Management API

This is a Node.js & Express.js based School Management API with MySQL as the database. The API allows users to manage students, teachers, courses, and schools efficiently.

Features

Student Management: Add, update, retrieve, and delete student records.

Teacher Management: Manage teacher profiles and assigned courses.

Course Management: Handle course registrations and listings.

School Listing: Fetch schools based on location.

Authentication: Secure login and authentication (JWT-based).

Live API Deployment: Hosted for public testing.

Postman Collection: Includes API requests with sample responses.

Tech Stack

Backend: Node.js, Express.js

Database: MySQL

Authentication: JWT

Hosting: [Your Hosting Service] (e.g., Railway, Render, AWS, etc.)

API Testing: Postman

Installation

Clone the repository:

  git clone [YOUR_GITHUB_REPO_URL]
  cd school-management-api

Install dependencies:

  npm install

Create a .env file:

DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=your_database_name
JWT_SECRET=your_secret_key
PORT=5000

Run migrations (if any):

  npx sequelize-cli db:migrate

Start the server:

  npm start

API Endpoints

Authentication

Login: POST /api/auth/login

Register: POST /api/auth/register

Students

Add Student: POST /api/students

Get Students: GET /api/students

Update Student: PUT /api/students/:id

Delete Student: DELETE /api/students/:id

Teachers

Add Teacher: POST /api/teachers

Get Teachers: GET /api/teachers

Update Teacher: PUT /api/teachers/:id

Delete Teacher: DELETE /api/teachers/:id

Schools

List Schools by Location: GET /api/listSchools?lat=latitude&long=longitude

Live API

The API is deployed and accessible at:
[YOUR_DEPLOYED_API_URL]

Postman Collection

Download the Postman collection from the following link:
[YOUR_POSTMAN_COLLECTION_LINK]

Contributing

Pull requests are welcome. Please open an issue first to discuss any significant changes.
