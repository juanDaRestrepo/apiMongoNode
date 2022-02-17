const express = require('express');
const initDB = require('./config/db')
const app = express();

const port = 3001

const userRouters = require('./app/routes/userRoutes');
const itemsRouters = require('./app/routes/itemsRoutes');

app.use(userRouters)
app.use(itemsRouters)

app.listen(port, () => {
    console.log('La aplicación esta en linea wuju')
})

initDB();