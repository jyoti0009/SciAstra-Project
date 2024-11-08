CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    discounted BOOLEAN DEFAULT FALSE
);

CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    publish_time DATETIME
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    course_id INT,
    payment_method VARCHAR(50),
    transaction_time DATETIME DEFAULT CURRENT_TIMESTAMP
);