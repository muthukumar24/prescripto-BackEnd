const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectCloudinary = require('./config/cloudinary.js');
const userRouter = require('./routes/userRoute.js');
const doctorRouter = require('./routes/doctorRoute.js');
const adminRouter = require('./routes/adminRoute.js');
require('dotenv').config();

// App Config
const app = express();
const PORT = process.env.PORT || 4000;

connectCloudinary()

// Middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on Port: ${PORT}`)
        })
    })
    .catch( error => {
        console.log("Error connecting to MongoDB", error)
    });