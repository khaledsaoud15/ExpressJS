const express = require("express");

const app = express();
app.use(express.json());



app.get("/", function (req, res) {
    console.log("GET Request Received");
    res.send('<h2 style="font-family: Malgun Gothic; color: blue;">Welcome to Express.js!</h2>');})
app.post('/addcourse', function (req, res){
    console.log("Post Request Received");
    res.send('<h2 style="font-family: Malgun Gothic; color: green;">A new Course is added!</h2>')})
app.delete("/delete", function (req, res){
    console.log("DELETE Request Received");
    res.send('<h2 style="font-family: Malgun Gothic; color: darkred>A Course has been Deleted!</h2>')
}) 
app.get("/course", function (req, res){
    console.log("DELETE Request Received for /course URI");
    res.send('<h2 style="font-family: Malgun Gothic; color: blue>This is an Available Course</h2>')
})
 //PORT ENVIRONEMENT VARIABLE
 const port = process.env.PORT || 8080;
 app.listen(port, () => console.log(`Listening on port ${port}..`))