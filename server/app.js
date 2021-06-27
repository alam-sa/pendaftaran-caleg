const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8800;
const router = require('./routes/index');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`); 
})