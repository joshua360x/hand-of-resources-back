-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`



DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  mood TEXT NOT NULL,
  sound TEXT NOT NULL
);


