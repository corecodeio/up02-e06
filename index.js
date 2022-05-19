const express = require('express');
const { server } = require('./src/config/config');
const oracle = require('./src/utils/oracle');
const app = express();

const categoryRoutes = require('./src/routes/category');
const invalidRoutes = require('./src/routes/404');

app.use(express.json());

app.use(categoryRoutes);
app.use(invalidRoutes);

oracle
  .start()
  .then(() => {
    console.log(`Oracle database connected!`);
    app.listen(server.port, () => {
      console.log(`Server is running on port: ${server.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
