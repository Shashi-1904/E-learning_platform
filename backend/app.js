const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const courseRoutes = require('./routes/coursesRoutes');
const linkroute = require('./routes/linkroute');
const app = express();


app.use(express.json());
app.use(cors()); 


app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/courses', courseRoutes);
app.use('/api/link', linkroute);



// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/wad", {
    
}).then(() => {
    console.log(`Connection Successful`);
}).catch((e) => {
    console.error(`Connection Error: ${e.message}`);
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
