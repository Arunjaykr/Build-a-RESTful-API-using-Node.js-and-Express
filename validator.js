const validateUser = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
    if (!firstName || !lastName || !hobby) {
      return res.status(400).json({ error: "All fields are required: firstName, lastName, hobby" });
    }
    next();
  };
  
  module.exports = validateUser;
  