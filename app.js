const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8800;

const { urlencoded } = require("express");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`); 
})