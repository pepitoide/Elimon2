const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI)
.then( () => console.log("DB conectada"))
.catch(err => console.log(err))
