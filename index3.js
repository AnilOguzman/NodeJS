var http=require("http");
var fs =require("fs");

var server =http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile("index.html",(err,html)=>{
            res.write(html);
            res.end();
        });
        
    }

    




});

server.listen(9000,()=>{
    console.log("açtım serverı");
});
