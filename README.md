# AuthPage

A full-stack authentication application with 3D flip animation for switching between login and signup forms.

## Features

- 🔐 User authentication (Login/Signup)
- 🎨 3D flip card animation
- 🎯 Modern UI with Bootstrap and custom CSS
- 🗄️ MySQL database integration
- 🔄 RESTful API with Spring Boot
- ⚛️ React frontend with responsive design

## Project Structure

```
base/
├── backend/          # Spring Boot application
│   ├── src/main/java/com/example/auth/
│   │   ├── controller/    # REST controllers
│   │   ├── entity/        # JPA entities
│   │   ├── repository/    # Data repositories
│   │   └── service/       # Business logic
│   └── src/main/resources/
│       └── application.properties
└── frontend/         # React application
    ├── src/
    │   ├── components/    # React components
    │   ├── styles/        # CSS files
    │   ├── App.js         # Main app component
    │   └── index.js       # Entry point
    └── public/
        └── index.html
```

## Prerequisites

- Java 17+
- Node.js 16+
- MySQL 8.0+
- Maven 3.6+

## Setup Instructions

### 1. Database Setup

Create a MySQL database:

```sql
CREATE DATABASE authdb;
```

Update database credentials in `backend/src/main/resources/application.properties`:

```properties
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 2. Backend Setup

```bash
cd base/backend
mvn clean install
mvn spring-boot:run
```

The backend will run on `http://localhost:8080`

### 3. Frontend Setup

```bash
cd base/frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### POST /api/auth/signup
Register a new user.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
}
```

### POST /api/auth/login
Authenticate a user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
}
```

## Usage

1. Open the application in your browser
2. Use the "Login" and "Sign Up" buttons to switch between forms
3. Watch the smooth 3D flip animation
4. Fill in the forms and submit to test the authentication

## Technologies Used

### Backend
- Spring Boot 3.2.0
- Spring Data JPA
- MySQL Connector
- Maven

### Frontend
- React 18.2.0
- Bootstrap 5.3.0
- Axios
- Custom CSS animations

## Future Enhancements

- JWT authentication
- Password hashing (BCrypt)
- Email verification
- Password reset functionality
- User profile management
- Social login integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
