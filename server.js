const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = { origin: 'http://localhost:8081' };
const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db');
});

app.get('/', (req, res) => {
  res.json({ message: 'welcome to server' });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
