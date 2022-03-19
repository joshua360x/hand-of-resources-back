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
      `,
      [madeIn, software, yearReleased]
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

  static async getParticularLaptop(id) {
    const { rows } = await pool.query(
      `
      SELECT
      *
      FROM
        laptops
      WHERE
        id=$1
      `,
      [id]
    );
    return new Laptop(rows[0]);
  }

  static async updateParticularLaptop(id, attributes) {
    const particularLaptop = await Laptop.getParticularLaptop(id);
    const updatedLaptop = { ...particularLaptop, ...attributes };
    const { madeIn, software, yearReleased } = updatedLaptop;



    const { rows } = await pool.query(
      `
      UPDATE
        laptops
      SET
        made_in=$1,
        software=$2,
        year_released=$3
      WHERE
        id=$4
        RETURNING
      *
      `, [madeIn, software, yearReleased, id]
    );
    return new Laptop(rows[0]);


  }

  static async deleteParticularLaptop(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        laptops
      WHERE
        id=$1
        RETURNING
      *
      `, [id]
    );
    return new Laptop(rows[0]);
  }
};
