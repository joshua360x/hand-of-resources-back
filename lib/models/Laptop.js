const pool = require('../utils/pool');

module.exports = class Laptop {
  id;
  madeIn;
  software;
  yearReleased;

  constructor(row) {
    this.id = row.id;
    this.madeIn = row.made_in;
    this.software = row.software;
    this.yearReleased = row.year_released;
  }



  static async insert({ madeIn, software, yearReleased }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        laptops (made_in, software, year_released)
      VALUES ($1, $2, $3)
        RETURNING
        *
      `, [madeIn, software, yearReleased]
    );
    return new Laptop(rows[0]);
  }


  static async getAllLaptops() {
    const { rows } = await pool.query(
      `
      SELECT
      *
      FROM
        laptops
      `
    );
    return rows.map((row) => new Laptop(row));
  }

};
