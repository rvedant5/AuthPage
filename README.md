# AuthPage
# AuthPage

A modern full-stack authentication application featuring a stunning 3D flip animation for seamless switching between login and signup forms. Built with Spring Boot backend and React frontend.

## ✨ Features

- 🔐 **Secure Authentication** - Login and signup with BCrypt password encryption
- 🎨 **3D Flip Animation** - Smooth card flip transition between forms
- 🎯 **Modern UI** - Bootstrap styling with custom CSS animations
- 🗄️ **Database Integration** - MySQL database with JPA auto-configuration
- 🔄 **RESTful API** - Clean Spring Boot backend architecture
- ⚛️ **React Frontend** - Responsive design with state management
- 🛡️ **Security** - Password encryption and secure data handling
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices

## 🏗️ Project Structure

```
base/
├── backend/                    # Spring Boot Application
│   ├── src/main/java/com/example/auth/
│   │   ├── controller/         # REST API Controllers
│   │   │   └── AuthController.java
│   │   ├── entity/            # JPA Entities
│   │   │   └── User.java
│   │   ├── repository/        # Data Access Layer
│   │   │   └── UserRepository.java
│   │   ├── service/           # Business Logic
│   │   │   └── AuthService.java
│   │   ├── config/            # Configuration Classes
│   │   │   └── SecurityConfig.java
│   │   ├── util/              # Utility Classes
│   │   │   └── CustomPasswordEncoder.java
│   │   └── AuthApplication.java # Main Application Class
│   ├── src/main/resources/
│   │   └── application.properties # Database & App Configuration
│   └── pom.xml                # Maven Dependencies
├── frontend/                   # React Application
│   ├── src/
│   │   ├── components/        # React Components
│   │   │   └── AuthPage.js    # Main Authentication Component
│   │   ├── styles/           # CSS Stylesheets
│   │   │   ├── Auth.css      # 3D Animation Styles
│   │   │   └── App.css       # Global Styles
│   │   ├── App.js            # Main App Component
│   │   └── index.js          # Application Entry Point
│   ├── public/
│   │   └── index.html        # HTML Template
│   └── package.json          # NPM Dependencies
├── setup-database.sql        # Database Setup Script
├── start-backend.bat         # Backend Startup Script
├── start-frontend.bat        # Frontend Startup Script
└── README.md                 # Project Documentation
```

## 🚀 Quick Start

### Prerequisites

- **Java 17+** - For Spring Boot backend
- **Node.js 16+** - For React frontend
- **MySQL 8.0+** - Database server
- **Maven 3.6+** - Build tool for backend

### 1. Database Setup

Create the MySQL database:

```sql
-- Run this in your MySQL client
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

**Backend will run on:** `http://localhost:8080`

### 3. Frontend Setup

```bash
cd base/frontend
npm install
npm start
```

**Frontend will run on:** `http://localhost:3000`

### 4. Alternative: Use Startup Scripts

- **Windows:** Double-click `start-backend.bat` and `start-frontend.bat`
- **Manual:** Use the commands above in separate terminals

## 🔧 API Documentation

### Authentication Endpoints

#### POST `/api/auth/signup`
Register a new user account.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Email already exists"
}
```

#### POST `/api/auth/login`
Authenticate user credentials.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid password"
}
```

## 🎨 3D Animation Features

### Animation Details
- **Duration:** 0.8 seconds smooth transition
- **Effect:** 3D card flip with perspective transform
- **Trigger:** Login/Sign Up button clicks
- **Responsive:** Works on all screen sizes

### CSS Features
- CSS3 transforms and transitions
- Backface visibility control
- Smooth perspective animations
- Mobile-responsive design

## 🛡️ Security Features

### Password Security
- **BCrypt Encryption** - Industry-standard password hashing
- **Salt Rounds** - Default BCrypt strength (10 rounds)
- **Secure Storage** - Encrypted passwords in database
- **No Plain Text** - Passwords never stored in plain text

### API Security
- **CORS Configuration** - Controlled cross-origin requests
- **Input Validation** - Server-side validation for all inputs
- **Error Handling** - Secure error messages without data leaks
- **JSON Security** - Password field excluded from API responses

## 🎯 User Experience

### Interface Flow
1. **Landing:** Users see the Login form by default
2. **Switch:** Click "Sign Up" button to flip to registration
3. **Animation:** Smooth 3D flip transition (0.8s)
4. **Forms:** Intuitive form validation and feedback
5. **Alerts:** Success/error notifications with auto-dismiss

### Responsive Design
- **Desktop:** Full 3D animation experience
- **Tablet:** Optimized layout and animations
- **Mobile:** Touch-friendly interface with adapted animations

## 🔧 Configuration

### Backend Configuration (`application.properties`)
```properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/authdb
spring.datasource.username=root
spring.datasource.password=root

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Server
server.port=8080

# CORS
cors.allowed.origins=http://localhost:3000
```

### Frontend Configuration
- **API Base URL:** `http://localhost:8080/api/auth`
- **Bootstrap:** Latest version included
- **Axios:** For HTTP requests
- **Custom CSS:** 3D animations and modern styling

## 📊 Database Schema

### Users Table (Auto-generated by JPA)
```sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL  -- BCrypt encrypted
);
```

## 🚀 Deployment

### Production Considerations
1. **Environment Variables** - Use environment variables for sensitive data
2. **HTTPS** - Enable SSL/TLS in production
3. **Database** - Use production MySQL instance
4. **Build** - Use `npm run build` for optimized frontend
5. **Security** - Review and update security configurations

### Docker Support (Future Enhancement)
- Containerized backend and frontend
- Docker Compose for full stack deployment
- Environment-based configuration

## 🔮 Future Enhancements

### Planned Features
- **JWT Authentication** - Token-based authentication
- **Email Verification** - Account activation via email
- **Password Reset** - Forgot password functionality
- **Social Login** - Google, Facebook, GitHub integration
- **User Profiles** - Extended user information
- **Admin Dashboard** - User management interface
- **Rate Limiting** - API request throttling
- **Audit Logging** - Security event tracking

### Technical Improvements
- **Microservices** - Split into separate services
- **Redis Caching** - Session and data caching
- **Message Queue** - Asynchronous processing
- **Monitoring** - Application performance monitoring
- **Testing** - Comprehensive unit and integration tests

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 License

- JWT authentication
- Password hashing (BCrypt)
- Email verification
- Password reset functionality
- User profile management
- Social login integration

## 👥 Support

For support, email your-email@example.com or create an issue in the repository.

---

**AuthPage** - Where authentication meets beautiful 3D animations! 🎨✨
This project is licensed under the MIT License.
