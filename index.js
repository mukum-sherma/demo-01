const express = require("express");
const app = express();
const port = 3000;

console.log(process.platform);
console.log(process.arch);

app.get("/", (req, res) => {
	res.send("Home Page APP");
});

app.listen(port, () => {
	console.log("This is dependencis-0...Example app listening on port " + port);
});
