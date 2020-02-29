CREATE SCHEMA `nutrition_manager`;

USE `nutrition_manager`;

CREATE TABLE user_type (
	id INT NOT NULL PRIMARY KEY,
    rol VARCHAR(10) NOT NULL
);

CREATE TABLE foods (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE user_profile (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR (500)NOT NULL,
	first_name VARCHAR(100),
    last_name VARCHAR(100),
    rol INT NOT NULL,
    sex TINYINT,
    age INT,
    user_status TINYINT NOT NULL,
    level INT,
	weight DECIMAL,
    height DECIMAL,
    nutrition_objective VARCHAR(30),
    notes VARCHAR(500),
    injures VARCHAR(500),
    diet_plan INT,
    gym_plan INT,
    creation_date DATETIME NOT NULL DEFAULT NOW()
);

/*CREATE TABLE monitoring (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
	creation_date DATETIME NOT NULL DEFAULT NOW(),
    pending INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE ON UPDATE CASCADE
);*/



CREATE TABLE user_foods (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    food_id INT NOT NULL,
    liked INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (food_id) REFERENCES foods(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_profile(id) ON DELETE CASCADE ON UPDATE CASCADE
);