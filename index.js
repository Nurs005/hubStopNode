const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000
const path = require('path');
const app = express();
const router = require('./router/index')


app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();