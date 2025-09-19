# AuthPage Troubleshooting Guide

## Common Issues and Solutions

### 🔐 "rawPassword cannot be null" Error

**Problem:** Getting "rawPassword cannot be null" error when trying to signup.

**Cause:** This error occurs when the password field is not properly received by the backend due to JSON serialization issues.

**Solution:** ✅ **FIXED** - The issue has been resolved by implementing proper DTOs:

1. **SignupRequest DTO** - Handles incoming signup data
2. **LoginRequest DTO** - Handles incoming login data  
3. **UserResponse DTO** - Returns user data without password
4. **Updated Controllers** - Now use DTOs instead of Entity classes

### 🔧 Database Connection Issues

**Problem:** Cannot connect to MySQL database.

**Solutions:**
1. Ensure MySQL service is running
2. Check database credentials in `application.properties`
3. Verify database `authdb` exists:
   ```sql
   CREATE DATABASE authdb;
   ```
4. Check MySQL port (default 3306)

### 🌐 CORS Issues

**Problem:** Frontend cannot connect to backend API.

**Solutions:**
1. Ensure backend is running on port 8080
2. Check CORS configuration in `AuthController.java`
3. Verify frontend is running on port 3000
4. Check browser console for CORS errors

### 📱 Frontend Build Issues

**Problem:** React app fails to build or start.

**Solutions:**
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
2. Check Node.js version (requires 16+)
3. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

### 🔒 Password Encryption Issues

**Problem:** Passwords not being encrypted properly.

**Solutions:**
1. Verify BCrypt dependency in `pom.xml`
2. Check `CustomPasswordEncoder` class
3. Ensure `SecurityConfig` is properly configured
4. Test password encoding with the test script

## 🧪 Testing the Application

### Manual Testing Steps

1. **Start Backend:**
   ```bash
   cd base/backend
   mvn spring-boot:run
   ```

2. **Start Frontend:**
   ```bash
   cd base/frontend
   npm start
   ```

3. **Test Signup:**
   - Open http://localhost:3000
   - Click "Sign Up" button
   - Fill in username, email, password
   - Submit form
   - Should see success message

4. **Test Login:**
   - Click "Login" button
   - Use the same email/password
   - Should see success message

### API Testing

Use the provided test script:
```bash
node test-signup.js
```

Or use curl commands:
```bash
# Test signup
curl -X POST http://localhost:8080/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"password123"}'

# Test login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🐛 Debug Mode

### Enable Debug Logging

Add to `application.properties`:
```properties
logging.level.com.example.auth=DEBUG
logging.level.org.springframework.security=DEBUG
```

### Check Application Logs

- Backend logs appear in the console where you started the Spring Boot app
- Frontend logs appear in browser console (F12)

## 📊 Health Checks

### Backend Health
- Check if backend responds: `http://localhost:8080/api/auth/login`
- Check database connection in logs
- Verify BCrypt encoder is working

### Frontend Health
- Check if React app loads: `http://localhost:3000`
- Check browser console for errors
- Verify API calls in Network tab

## 🚨 Emergency Reset

If everything is broken:

1. **Reset Database:**
   ```sql
   DROP DATABASE authdb;
   CREATE DATABASE authdb;
   ```

2. **Clean Backend:**
   ```bash
   cd base/backend
   mvn clean
   mvn compile
   ```

3. **Clean Frontend:**
   ```bash
   cd base/frontend
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Restart Everything:**
   - Stop all running processes
   - Start backend first
   - Start frontend second

## 📞 Getting Help

If you're still having issues:

1. Check the application logs
2. Verify all prerequisites are installed
3. Test with the provided test scripts
4. Check this troubleshooting guide
5. Review the main README.md

---

**Remember:** Always start the backend before the frontend for proper connectivity!