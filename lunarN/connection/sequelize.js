// connection/sequelize.js

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lunar', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export default sequelize;