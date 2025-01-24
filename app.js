const {sequelize} = require('./models');
const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoute')


app.use('/api',userRoutes);

const port = 8001
app.listen({ port }, async () => {
    console.log(`Server is now listening at port: ${port}`);
    // console.log(`JWT_SECRET is set`);
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});