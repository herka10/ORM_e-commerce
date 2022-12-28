const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
// import sequelize connection X

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server X
sequelize.sync({force: false}).then(async () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})


