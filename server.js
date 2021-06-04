const express = require('express');
const app = express();
const routes = require('./routes/files');
const router = require('./routes/show');
const downloadRouter = require('./routes/download');
const path = require('path');
const PORT = process.env.PORT || 2266;

app.use(express.static('public'));
app.use(express.json);

const connectDB = require('./config/db');
connectDB();

//template engine 
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes

//app.use('/api/files', require('./routes/files'));
app.use('/api/files', routes);
app.use('/files',router);
app.use('/files/download',downloadRouter);
app.listen(PORT, () => {
    console.log(`listening to port: http://localhost:${PORT}`)
})