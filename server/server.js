const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const shopsRoutes = require('./routes/shops');

const app = express();
const PORT = process.env.PORT || 3000;

//Configuration of the app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes of the App
app.use('/api/shops', shopsRoutes);
app.use('/api/users', usersRoutes);

// listen for requests :)
const listener = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
