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
  
  static async getAllAnimals() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        animals
      `
    );
    return rows.map(row => new Animal(row));
  }

  static async getAParticularAnimalByID(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        animals
      WHERE
        id=$1
      `, [id]
    );
    return new Animal(rows[0]);
  }

  static async updateByID(id, attributes) {
    const animalInSystem = await Animal.getAParticularAnimalByID(id);
    const animalTraits = { ...animalInSystem, ...attributes };
    const { name, type, mood, sound } = animalTraits;
    const { rows } = await pool.query(
      `
      UPDATE
        animals
      SET
        name=$1,
        type=$2,
        mood=$3,
        sound=$4
      WHERE
        id=$5
      RETURNING
        *
      `, [name, type, mood, sound, id]
    );
    return new Animal(rows[0]);
  }

  static async deleteAParticularAnimal(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        animals
      WHERE
        id=$1
      RETURNING
        *
      `, [id]
    );
    return new Animal(rows[0]);
  }


};




