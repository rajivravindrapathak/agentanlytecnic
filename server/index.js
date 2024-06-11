// backend/server.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const { connection } = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
    try {
        await connection;
        console.log("connected to DB")
    } catch (err) {
        console.log("not connected to db")    
        console.log(err)
    }
    console.log(`listning on PORT ${PORT}`)
});
