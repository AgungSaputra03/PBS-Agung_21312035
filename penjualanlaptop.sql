CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(15)
);

INSERT INTO Customers (customer_name, email, phone_number) VALUES
('Agung', 'agung@gmail.com', '123-456-7890'),
('Jane Smith', 'jane.smith@example.com', '987-654-3210'),
('Michael Johnson', 'michael.johnson@example.com', '456-789-0123');


CREATE TABLE Laptops (
    laptop_id INT AUTO_INCREMENT PRIMARY KEY,
    laptop_name VARCHAR(255),
    brand VARCHAR(100),
    price DECIMAL(10, 2)
);

INSERT INTO Laptops (laptop_name, brand, price) VALUES
('Latitude 9510', 'Dell', 1999.99),
('MacBook Pro', 'Apple', 2399.99),
('ThinkPad X1 Carbon', 'Lenovo', 1499.99);


CREATE TABLE Sales (
    sale_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    laptop_id INT,
    quantity INT,
    sale_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (laptop_id) REFERENCES Laptops(laptop_id)
);

INSERT INTO Sales (customer_id, laptop_id, quantity, sale_date) VALUES
(1, 1, 2, '2024-03-24'),
(2, 2, 1, '2024-03-23'),
(3, 3, 3, '2024-03-22');