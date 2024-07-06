// connection/sequelize.js

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lunar', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

function connected(){
  try{

    sequelize.authenticate();
    console.log("Connected");

  }
  catch(err){
    throw new Error(err);
  }
}
connected();

export default sequelize;