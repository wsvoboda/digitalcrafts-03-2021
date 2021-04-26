CREATE DATABASE clothes;

CREATE TABLE items(
    itemsid SERIAL PRIMARY KEY,
    name VARCHAR(50),
    color VARCHAR(50),
    size VARCHAR(50),
);