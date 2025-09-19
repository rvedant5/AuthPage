package com.example.auth.service;

import com.example.auth.dto.LoginRequest;
import com.example.auth.dto.SignupRequest;
import com.example.auth.dto.UserResponse;
import com.example.auth.entity.User;
import com.example.auth.repository.UserRepository;
import com.example.auth.util.CustomPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private CustomPasswordEncoder passwordEncoder;
    
    public UserResponse signup(SignupRequest signupRequest) {
        // Check if email already exists
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        
        // Check if username already exists
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        
        // Create new user entity
        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setEmail(signupRequest.getEmail());
        
        // Encrypt the password before saving
        String encryptedPassword = passwordEncoder.encode(signupRequest.getPassword());
        user.setPassword(encryptedPassword);
        
        // Save the user
        User savedUser = userRepository.save(user);
        
        // Return user response without password
        return new UserResponse(savedUser.getId(), savedUser.getUsername(), savedUser.getEmail());
    }
    
    public UserResponse login(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // Use password encoder to check if the provided password matches the encrypted one
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return new UserResponse(user.getId(), user.getUsername(), user.getEmail());
            } else {
                throw new RuntimeException("Invalid password");
            }
        } else {
            throw new RuntimeException("User not found");
        }
    }
}