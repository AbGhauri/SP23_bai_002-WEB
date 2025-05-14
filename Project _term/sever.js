let express = require('express');
let layout = require('express-ejs-layouts');
let app = express();

app.use(express.static("public"));
app.use(layout);
app.set("view engine", "ejs");

app.get("/",( req, res) => {
      res.render("home", {layout:false});
});
app.get("/cv",(req,res) => {
        res.render("cv", {layout:false});
});
app.get("/form",(req,res) => {
      res.render("form", {layout:false});
});
app.listen(3000,() => {
      console.log("Server is running on port 3000");
});