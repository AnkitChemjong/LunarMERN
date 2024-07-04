// model/userModel.js

import { DataTypes } from 'sequelize';
import sequelize from '../connection/sequelize.js';

const User = sequelize.define('User', {
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        defaultValue:Math.random()*90
    },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
        isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


export default User;