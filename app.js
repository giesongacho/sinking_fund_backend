const {sequelize} = require('./models');
const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoute.js')
const userFundRoute = require('./routes/userFundRoute.js')
const headRoutes = require('./routes/headRoute.js')
const creditRequestRoutes = require('./routes/creditRequestRoutes.js')
const creditBalanceRoutes = require('./routes/creditBalanceRoutes.js')

app.use('/api',userRoutes);
app.use('/fund/api',userFundRoute);
app.use('/head/api', headRoutes);
app.use('/credit/request/api', creditRequestRoutes);
app.use('/credit/balance/api', creditBalanceRoutes);

const port = 5000
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