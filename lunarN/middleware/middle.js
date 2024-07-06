import { give } from '../services/auth.js';

const check = (token) => {
  return async (req, res, next) => {
    req.user = null;
    const value =await req.cookies[token];

    if (!value) {
      return next();
    }

    try {
      const payload =await give(value);
      if (!payload) {
        return next();
      }
      req.user = payload;
    } catch (error) {
      console.error('Error in middleware:', error);
    }

    return next();
  };
};

export default check;