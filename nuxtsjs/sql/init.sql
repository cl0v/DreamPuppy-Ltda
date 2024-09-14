CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    breed VARCHAR(100) NOT NULL,
    size VARCHAR(30),
    gender VARCHAR(10),
    color VARCHAR(30),
    name VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    whatsapp VARCHAR(20),
    address VARCHAR(255) NOT NULL,
    city VARCHAR(30) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    payment_id INT NOT NULL,
    payment_status VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);