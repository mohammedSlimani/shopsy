const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const usersRoutes = require('./routes/users');
const shopsRoutes = require('./routes/shops');
const sessionStore = new session.MemoryStore();
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  key: 'express.sid',
  store: sessionStore,
}));


//Configuration of the app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

//Routes of the App
app.use('/api/shops', shopsRoutes);
app.use('/api/users', usersRoutes);

// listen for requests :)
const listener = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
