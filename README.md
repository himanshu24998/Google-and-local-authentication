# Google and Local Authentication System

## Overview
This project implements a **user authentication system** using both **local (email and password)** and **Google authentication** methods. It's designed with the MERN stack (MongoDB, Express, React, Node.js) and showcases private routing for access management. The system ensures that only authenticated users can access specific pages, such as the dashboard.


## Features
- **Local Authentication**: Users can register and log in using an email and password.
- **Google Authentication**: Sign in with Google functionality using OAuth.
- **Private Routing**: Only authenticated users can access specific routes.
- **State Management**: Stores the user token and manages login state in local storage.

## Setup and Installation
### Prerequisites
- Node.js and npm
- MongoDB (locally or through MongoDB Atlas)

### Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/himanshu24998/Google-and-local-authentication.git
    cd Google-and-local-authentication
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**: Create a `.env` file in the root directory with the following variables:
    ```plaintext
    PORT=5000
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    MONGO_DB_URL=<your_mongodb_url>
    JWT_SECRET=<your_jwt_secret>
    JWT_TIMEOUT=12h
    LOCAL_DB_URL=mongodb://localhost:27017/google-auth
    ```

4. **Run the Server by navigating to the Server folder**:
    ```bash
    npm start
    ```

5. **Start the React App**:
    ```bash
    npm run start
    ```

## Usage
- **Local Registration & Login**: Enter email and password for registration, and then log in with those credentials.
- **Google Authentication**: Click the Google login button to authenticate using your Google account.
- **Dashboard Access**: Users who are logged in can access the dashboard. Unauthorized users will be redirected to the login page.

## Technology Stack
- **Frontend**: React with Vite for fast development, `react-router-dom` for routing
- **Backend**: Node.js, Express for server setup
- **Database**: MongoDB for data storage
- **Authentication**: JSON Web Tokens (JWT) for session management, Google OAuth for third-party login

## License
This project is licensed under the MIT License.
