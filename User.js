const database = require('./database');

const User = {
  async readAll(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM public.train1';
      const { rows } = await database.query(readAllQuery);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  }
};

module.exports = User;