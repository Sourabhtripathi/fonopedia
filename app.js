const express 	= require("express"),
	  mongoose 	= require("mongoose"),
	  app 		= express();

// App Config
app.set("view engine", "ejs");
app.set("views", __dirname + "/public/views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=>{
	res.render("index");
});

app.listen(3000, ()=>{
	console.log("App is now listening on port 3000");
});