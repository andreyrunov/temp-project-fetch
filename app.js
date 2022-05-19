const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const hbs = require('hbs');

const PORT = process.env.DB_PORT;
const app = express();
const indexRout = require('./routes/indexRout');
const postRout = require('./routes/postRout');
const showPosts = require('./routes/showPosts');
const deletePost = require('./routes/deletePost');
const addTheme = require('./routes/addTheme');

app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use('/', indexRout);
app.use('/post', postRout);
app.use('/showPosts', showPosts);
app.use('/delete/', deletePost);
app.use('/addTheme', addTheme);

app.listen(PORT, () => {
  console.log('Server start on port', PORT);
});
