const pool = require('../utils/pool');

module.exports = class Animal {
  id;
  name;
  type;
  mood;
  sound;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.mood = row.mood;
    this.sound = row.sound;
  }

  static async insert({ name, type, mood, sound }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        animals (name, type, mood, sound)
      VALUES
        ($1, $2, $3, $4)
      RETURNING
      *
      `,
      [name, type, mood, sound]
    );
    return new Animal(rows[0]);
  }
};