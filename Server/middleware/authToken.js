import jwt from "jsonwebtoken";

export const authToken = async (req, res, next) => {
  req.user=null;
  const ticket=req.cookies?.token;
  console.log(ticket);

  if (!ticket) {
    return res.status(401).send({ message: "User not authenticated" });
  }

  try {
    const decoded = jwt.verify(ticket, 'secret_key');
    //console.log(decoded);
    req.user = { id: decoded.id, email: decoded.email }; 
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const authUser = (tokens) => {
  return (req, res, next) => {
    if (!tokens) {
      return next();
    }

    req.user = null;
    const token = req.cookies[tokens];

    if (!token) {
      return next();
    }

    try {
      const decoded = jwt.verify(token, 'secret_key');
      req.user = { id: decoded.id, email: decoded.email }; 
      next();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
