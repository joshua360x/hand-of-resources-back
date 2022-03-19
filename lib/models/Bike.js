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
      `,
      [condition, color, miles]
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

  static async getAParticularBike(id) {
    const { rows } = await pool.query(
      `
      SELECT
      *
      FROM
        bikes
      WHERE
        id=$1
      `,
      [id]
    );
    return new Bike(rows[0]);
  }

  static async updateAParticularBike(id, attributes) {
    const particularBike = await Bike.getAParticularBike(id);
    const updatedBike = { ...particularBike, ...attributes };
    const { condition, color, miles } = updatedBike;

    const { rows } = await pool.query(
      `
      UPDATE
        bikes
      SET
        condition=$1,
        color=$2,
        miles=$3
      WHERE
        id=$4
      RETURNING
      *
      `,
      [condition, color, miles, id]
    );
    return new Bike(rows[0]);
  }

  static async deleteAParticularBike(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        bikes
      WHERE id=$1
      RETURNING
      *
      `,
      [id]
    );
    return new Bike(rows[0]);
  }
};
