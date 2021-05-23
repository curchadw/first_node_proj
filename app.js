//importing the http module
const http = require("http");
//importing a fs module
const fs = require("fs");

//defining the host address
const hostname = "0.0.0.0";
//declaring the port we'll be listening from
const port = 8080;


const homePage = fs.readFileSync('main.html')
const aboutPage = fs.readFileSync('about.html')

const server = http.createServer((req,res) =>{
    res.statusCode =200
    if(req.url == "/"){
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.write(homePage)
    }else if(req.url == "/about"){
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.write(aboutPage)
    }else {
        res.statusCode = 404;
        res.write("404");
        console.log(req.url);
      }
      res.end();
})


server.listen(port, hostname, ()=>{
    console.log("Server is now running")
})