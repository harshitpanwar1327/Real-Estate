import { pool } from "../config/Database.js";

const projects = `CREATE TABLE IF NOT EXISTS projects(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    status ENUM('completed', 'ongoing', 'upcoming') NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;

const properties = `CREATE TABLE IF NOT EXISTS properties(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    property_type ENUM('apartment', 'villa', 'plot') NOT NULL,
    bedrooms INT,
    bathrooms INT,
    area_sqft INT NOT NULL,
    status ENUM('active', 'sold', 'draft') NOT NULL,
    featured BOOLEAN,
    description TEXT,
    project_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);`;

const enquiries = `CREATE TABLE IF NOT EXISTS enquiries(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    property_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (property_id) REFERENCES properties(id)
);`;

const admins = `CREATE TABLE IF NOT EXISTS admins(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`;

const media_files = `CREATE TABLE IF NOT EXISTS media_files(
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('project', 'property') NOT NULL,
    property_id INT,
    project_id INT,
    url TEXT NOT NULL,
    caption VARCHAR(255),
    is_cover BOOLEAN,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (property_id) REFERENCES properties(id),
    FOREIGN KEY (project_id) REFERENCES project(id)
);`;

const createTable = async (tableName, query) => {
    try {
        await pool.query(query);
        console.log(`${tableName} table created successfully`);
    } catch (error) {
        console.log(`${tableName} not created`, error);
    }
};

const createAllTables = async()=>{
    try {
        await createTable("Projects", projects);
        await createTable("Properties", properties);
        await createTable("Enquiries", enquiries);
        await createTable("Admins", admins);
        await createTable("Media_files", media_files);
    } catch (error) {
        console.log(error);
    }
}

export default createAllTables