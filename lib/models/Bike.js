const pool = require('../utils/pool');

module.exports = class Bike {
  id;
  condition;
  color;
  miles;

  constructor(row) {
    this.id = row.id;
    this.condition = row.condition;
    this.color = row.color;
    this.miles = row.miles;
  }




  static async insert({ condition, color, miles }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        bikes (condition, color, miles)
      VALUES ($1, $2, $3)
      RETURNING
      *
      `, [condition, color, miles]
    );
    return new Bike(rows[0]);
  }

  static async getAllBikes() {
    const { rows } = await pool.query(
      `
      SELECT
      *
      FROM
        bikes
      `
    );
    return rows.map((row) => new Bike(row));
  }





};

