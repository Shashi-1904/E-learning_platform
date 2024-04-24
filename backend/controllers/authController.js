// server/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });

    
    if (!user) {
      return res.status(400).json({ message: 'User not found!! Please Register' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

   
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Wrong Password!! Retry again' });
    }

    // Include user's name in the response message
    res.status(200).json({ message: 'Login successful', name: user.name });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
