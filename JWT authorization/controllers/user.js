exports.getUserProfile = (req, res) => {
  res.json({ message: "Welcome to your profile", user: req.user });
};
