// model/userModel.js
import {make} from '../services/auth.js';
import { DataTypes } from 'sequelize';
import sequelize from '../connection/sequelize.js';
import bcrypt from 'bcrypt';

const User = sequelize.define('User', {
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
  },
  salt:{
    type:DataTypes.STRING,
    allowNull: true
       }
});
// Add a beforeSave hook to hash the password
User.beforeSave(async (user, options) => {
  if (user.changed('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.salt=salt;
  }
});

// Define a class method
User.findByCredentials = async function (email, password) {
  const user = await this.findOne({ where: { email } }); 
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password); // Compare entered password with hashed password
  if (!isMatch) throw new Error("Invalid email or password");

  const token = make(user);
  return token;
};


export default User;