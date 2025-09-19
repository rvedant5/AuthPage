-- PLoginSignup3D Database Setup
-- Run this script in your MySQL client

-- Create the database
CREATE DATABASE IF NOT EXISTS authdb;

-- Use the database
USE authdb;

-- The users table will be automatically created by JPA
-- with the following structure:
-- CREATE TABLE users (
--     id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(255) NOT NULL UNIQUE,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL
-- );

-- Show the created database
SHOW DATABASES;

-- Display instructions
SELECT 'Database authdb created successfully!' as message;
SELECT 'Please update your application.properties with your MySQL credentials' as instructions;