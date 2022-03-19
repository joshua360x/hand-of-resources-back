-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`



DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS tvs;
DROP TABLE IF EXISTS laptops;
DROP TABLE IF EXISTS bikes;

CREATE TABLE animals (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  mood TEXT NOT NULL,
  sound TEXT NOT NULL
);


CREATE TABLE cars (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT NOT NULL CHECK (year > 1950)
);


CREATE TABLE tvs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  type TEXT NOT NULL,
  brand TEXT NOT NULL,
  size INT NOT NULL CHECK (size > 20)
);


CREATE TABLE laptops (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  made_in TEXT NOT NULL,
  software TEXT NOT NULL,
  year_released INT NOT NULL CHECK (year_released > 2000)
);


CREATE TABLE bikes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  condition TEXT NOT NULL,
  color TEXT NOT NULL,
  miles INT NOT NULL CHECK (miles > 0)
);




