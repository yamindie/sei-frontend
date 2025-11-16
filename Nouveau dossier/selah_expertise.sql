-- USERS
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user','admin','coach') DEFAULT 'user',
    photo VARCHAR(255) NULL,
    bio TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- FORMATIONS
CREATE TABLE formations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    excerpt VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    duration VARCHAR(50),
    category VARCHAR(100),
    image VARCHAR(255),
    instructor_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (instructor_id) REFERENCES users(id) ON DELETE SET NULL
);

-- ORDERS
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    formation_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending','paid','failed') DEFAULT 'pending',
    payment_method ENUM('mobile_money','credit_card','bank') DEFAULT 'mobile_money',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (formation_id) REFERENCES formations(id)
);

-- COURSE CONTENT
CREATE TABLE course_contents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    formation_id INT NOT NULL,
    title VARCHAR(255),
    content_type ENUM('video','pdf','quiz','text'),
    file_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (formation_id) REFERENCES formations(id) ON DELETE CASCADE
);

-- PROGRESS
CREATE TABLE progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    formation_id INT NOT NULL,
    content_id INT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (formation_id) REFERENCES formations(id),
    FOREIGN KEY (content_id) REFERENCES course_contents(id)
);

-- COACHING
CREATE TABLE coaching_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coach_id INT NOT NULL,
    client_id INT NOT NULL,
    session_date DATETIME NOT NULL,
    theme VARCHAR(255),
    notes TEXT NULL,
    status ENUM('pending','confirmed','completed','cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (coach_id) REFERENCES users(id),
    FOREIGN KEY (client_id) REFERENCES users(id)
);

-- BLOG ARTICLES
CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content LONGTEXT NOT NULL,
    author_id INT NOT NULL,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- MESSAGES
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150),
    email VARCHAR(150),
    subject VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- STATISTICS
CREATE TABLE stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total_users INT DEFAULT 0,
    total_sales DECIMAL(10,2) DEFAULT 0,
    total_coaching INT DEFAULT 0,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
