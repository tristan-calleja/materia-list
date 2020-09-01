const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      message: "Are you trying to hack me?",
    });
  }

  try {
    const decoded = jwt.verify(token, "somethingMaterialistic");

    // user below is the one from const payload in auth.route
    req.user = decoded.user;
    next();
    
  } catch (err) {
    return res.status(401).json({
      message: "Token is not valid!",
    });
  }
};