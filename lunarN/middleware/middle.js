import { give } from '../services/auth.js';

const check = (token) => {
  return (req, res, next) => {
    req.user = null;
    const value =req.cookies[token];
    //console.log(value);

    if (!value) {
      return next();
    }

    try {
      const payload =give(value);
      if (!payload) {
        return next();
      }
      req.user = payload;
    //console.log(req.user);
    } catch (error) {
      console.error('Error in middleware:', error);
    }

    return next();
  };
};

export default check;