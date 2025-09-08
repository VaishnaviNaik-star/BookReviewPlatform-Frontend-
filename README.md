📚 Book Review Platform
    A full-stack web application where users can register, browse books, view details, and add reviews. Built using Node.js, Express, MongoDB, React, and Material UI.

🎯 Objective
    To create a platform that allows users to share their thoughts on books and see reviews from others. Demonstrates skills in backend APIs, frontend design, authentication, and database integration.

🛠️ Technologies Used
 Backend:
   > Node.js
   > Express.js
   > MongoDB Atlas
   > Mongoose
   > JWT (for authentication)
   > bcrypt (for password hashing)

 Frontend:
   > React.js
   > Material UI
   > Axios (for API calls)
   > React Router DOM

 Other Tools:
   > Vite (frontend build tool)
   > Node (backend auto-reload)

🗂️ Project Structure
 > Backend:

backend/
│
├─ models/            # Mongoose schemas for User, Book, Review
├─ routes/            # Auth, Books, Reviews API routes
├─ seed.js            # Script to populate initial books
├─ server.js          # Entry point for backend server
├─ package.json
└─ .env               # Environment variables

 > Frontend:
 
 frontend/
│
├─ src/
│   ├─ components/     # Navbar, BookCard, ReviewForm
│   ├─ pages/          # Home, Login, Register, BookDetails
│   ├─ App.jsx         # Main app with routing
│   └─ main.jsx
├─ public/
├─ package.json
└─ vite.config.js

🖥️ Features: 
   > User registration and login with JWT authentication
   > Browse books with title, author, image, and average rating
   > View book details, including description and all reviews
   > Submit ratings (1–5 stars) and comments
   > Logout and persistent login using localStorage
   > Responsive and attractive UI with Material UI

📚 Sample Books Included:

   > Good Vibes, Good Life by Vex King
   > The Power of Now by Eckhart Tolle
   > Atomic Habits by James Clear
   > You Are a Badass by Jen Sincero
   > The 7 Habits of Highly Effective People by Stephen R. Covey
  
🔹 Setup:
   Backend:
        cd backend
        npm install
        node seed.js      # populate books
        npm run dev       # start server

    Frontend:
        cd frontend
        npm install
        npm run dev       # open http://localhost:5173


🔹 API Endpoints:
    > POST /api/auth/register → Register
    > POST /api/auth/login → Login
    > GET /api/books → All books
    > GET /api/books/:id → Book details with reviews
    > POST /api/reviews → Add review


**💻 Made with ❤️ by Vaishnavi**