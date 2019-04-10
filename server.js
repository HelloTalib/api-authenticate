// initialize settup
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const port = process.env.PORT || 3000;
const db = require("./config/keys").mongoURI;

// import routes
const users = require("./routes/users");

// config bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database setup
mongoose.connect(db, { useNewUrlParser: true });

// passport setup
app.use(passport.initialize());
require("./config/passport")(passport);

// uses of routes
app.use("/users", users);

// localhost server initialize
app.listen(port, () => {
  console.log(`Server is running on port no : ${port}`);
});
