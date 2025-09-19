// Test script to verify signup endpoint works correctly
// Run this with Node.js to test the API

const axios = require('axios');

async function testSignup() {
    try {
        const signupData = {
            username: "testuser",
            email: "test@example.com",
            password: "testPassword123"
        };

        console.log('Testing signup with data:', signupData);
        
        const response = await axios.post('http://localhost:8080/api/auth/signup', signupData);
        
        console.log('✅ Signup successful!');
        console.log('Response:', response.data);
        
        // Test login with the same credentials
        console.log('\nTesting login...');
        const loginData = {
            email: "test@example.com",
            password: "testPassword123"
        };
        
        const loginResponse = await axios.post('http://localhost:8080/api/auth/login', loginData);
        
        console.log('✅ Login successful!');
        console.log('Response:', loginResponse.data);
        
    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
    }
}

// Run the test
testSignup();