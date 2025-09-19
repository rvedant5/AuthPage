// Test script to verify BCrypt password encryption
// Run this to test password encoding and matching

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncryptionTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        // Test password
        String rawPassword = "testPassword123";
        
        // Encode password
        String encodedPassword = encoder.encode(rawPassword);
        
        System.out.println("Original Password: " + rawPassword);
        System.out.println("Encoded Password: " + encodedPassword);
        System.out.println("Password Length: " + encodedPassword.length());
        
        // Test matching
        boolean matches = encoder.matches(rawPassword, encodedPassword);
        System.out.println("Password Matches: " + matches);
        
        // Test with wrong password
        boolean wrongMatch = encoder.matches("wrongPassword", encodedPassword);
        System.out.println("Wrong Password Matches: " + wrongMatch);
    }
}