const pool = require('../utils/pool');

module.exports = class TV {
  id;
  type;
  brand;
  size;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.brand = row.brand;
    this.size = row.size;
  }

  static async insert({ type, brand, size }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        tvs (type, brand, size)
      VALUES ($1, $2, $3)
      RETURNING
      *
      `,
      [type, brand, size]
    );
    return new TV(rows[0]);
  }

  static async getAllTvs() {
    const { rows } = await pool.query(
      `
      SELECT
       *
      FROM
        tvs
      `
    );
    return rows.map((row) => new TV(row));
  }

  static async getAParticularTV(id) {
    const { rows } = await pool.query(
      `
      SELECT
      *
      FROM
        tvs
      WHERE
        id=$1
      `,
      [id]
    );
    return new TV(rows[0]);
  }

  static async updateAParticularTV(id, attributes) {
    const particularTV = await TV.getAParticularTV(id);
    const updatedTVAttributes = { ...particularTV, ...attributes };
    const { type, brand, size } = updatedTVAttributes;

    const { rows } = await pool.query(
      `
      UPDATE
        tvs
      SET
        type=$1,
        brand=$2,
        size=$3
      WHERE
        id=$4
      RETURNING
        *
        `,
      [type, brand, size, id]
    );
    return new TV(rows[0]);
  }

  static async deleteAParticularTV(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        tvs
      WHERE
        id=$1
      RETURNING
        *
      `,
      [id]
    );
    return new TV(rows[0]);
  }
};
