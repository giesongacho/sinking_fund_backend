const {sequelize} = require('./models');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoute.js')
const userFundRoute = require('./routes/userFundRoute.js')
const headRoutes = require('./routes/headRoute.js')
const creditRequestRoutes = require('./routes/creditRequestRoutes.js')
const creditBalanceRoutes = require('./routes/creditBalanceRoutes.js')
const creditPaymentRoutes = require('./routes/creditPaymentRoutes.js')

app.use(cors({
    origin:['http://localhost:5173'],
    method: ['GET','POST'],
    allowedHeaders: ['Content-type', 'Authorization']
}))

app.use('/api',userRoutes);
app.use('/api/fund',userFundRoute);
// app.use('/api/head', headRoutes);
app.use('/api/credit/request', creditRequestRoutes);
app.use('/api/credit/balance', creditBalanceRoutes);
app.use('/api/credit/payment', creditPaymentRoutes)

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