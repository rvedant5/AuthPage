# AuthPage Deployment Guide

This guide provides step-by-step instructions for deploying the AuthPage application.

## 🚀 Quick Deployment

### Prerequisites
- Java 17+ installed
- Node.js 16+ installed
- MySQL 8.0+ running
- Git (optional)

### Step 1: Database Setup
```sql
-- Connect to MySQL and run:
CREATE DATABASE authdb;
USE authdb;
```

### Step 2: Backend Deployment
```bash
cd base/backend
mvn clean install
mvn spring-boot:run
```

### Step 3: Frontend Deployment
```bash
cd base/frontend
npm install
npm start
```

## 🔧 Configuration

### Database Configuration
Update `backend/src/main/resources/application.properties`:

```properties
# Update these values for your environment
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

### Frontend Configuration
The frontend is configured to connect to `http://localhost:8080` by default.

## 🐳 Docker Deployment (Optional)

### Backend Dockerfile
```dockerfile
FROM openjdk:17-jdk-slim
COPY target/authpage-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Frontend Dockerfile
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🌐 Production Deployment

### Environment Variables
Set these environment variables in production:

```bash
export DB_HOST=your_database_host
export DB_USERNAME=your_database_user
export DB_PASSWORD=your_database_password
export SERVER_PORT=8080
```

### Security Checklist
- [ ] Change default database credentials
- [ ] Enable HTTPS in production
- [ ] Configure firewall rules
- [ ] Set up SSL certificates
- [ ] Enable database encryption
- [ ] Configure CORS for production domain

## 📊 Monitoring

### Health Checks
- Backend: `http://localhost:8080/actuator/health`
- Frontend: Check if React app loads correctly

### Logs
- Backend logs: Check console output or log files
- Frontend logs: Check browser console

## 🔍 Troubleshooting

### Common Issues

#### Database Connection Failed
- Check MySQL service is running
- Verify database credentials
- Ensure database `authdb` exists

#### Frontend Cannot Connect to Backend
- Check backend is running on port 8080
- Verify CORS configuration
- Check firewall settings

#### Build Failures
- Ensure Java 17+ is installed
- Check Maven installation
- Verify Node.js 16+ is installed

## 📈 Performance Optimization

### Backend
- Enable connection pooling
- Configure JVM memory settings
- Use production MySQL configuration

### Frontend
- Use `npm run build` for production
- Enable gzip compression
- Use CDN for static assets

## 🔄 Updates and Maintenance

### Updating the Application
1. Stop the running services
2. Pull latest changes
3. Rebuild and restart services
4. Test the application

### Database Migrations
The application uses JPA auto-update (`ddl-auto=update`). For production, consider:
- Using Flyway or Liquibase
- Manual migration scripts
- Database backup before updates

---

For more detailed information, see the main [README.md](README.md) file.