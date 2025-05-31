CREATE DATABASE IF NOT EXISTS studentBackend;
USE studentBackend;

CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS students (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    course VARCHAR(100) NOT NULL
);

-- Insert a default user for testing
INSERT INTO users (username, password) VALUES ('admin', 'admin123')
ON DUPLICATE KEY UPDATE username = 'admin'; 