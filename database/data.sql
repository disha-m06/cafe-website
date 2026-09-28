-- Create Tables
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS menu (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    image TEXT,
    available BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS reservations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    guests INT NOT NULL,
    special_request TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    items JSONB NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Sample Menu Data
INSERT INTO menu (name, description, price, category, image, available) VALUES
('Cappuccino', 'Rich espresso with creamy steamed milk foam', 140.00, 'Coffee', 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500', true),
('Cheesecake', 'Classic creamy New York cheesecake', 180.00, 'Dessert', 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500', true),
('Green Tea', 'Refreshing organic green tea leaves', 100.00, 'Tea', 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500', true),
('Veg Club Sandwich', 'Fresh veggies and cheese grilled to perfection', 160.00, 'Snacks', 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500', true);