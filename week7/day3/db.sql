CREATE DATABASE todolist;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, -- will be created by the database on its own
    description VARCHAR(255) -- needs this from user
)