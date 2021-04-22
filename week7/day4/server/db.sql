CREATE DATABASE vacations;

CREATE TABLE locations(
    location_id SERIAL PRIMARY KEY,
    location VARCHAR(50),
    country VARCHAR(50),
    month VARCHAR(50),
    cost VARCHAR(50)
);