//console.log("Selam");
//request - response => server lazım
// node sayesinde HTTP serverı oluşturabiliyoruz

var http=require("http");//require bir kütüphaneyi prgramımıza dahil ediyo
//http yerine fs,os de kullanılabilir
var fs=require("fs");//filesystem demek dosyalarla çalışırken kullancaz
var server = http.createServer((req,res)=>{
   // console.log(req.url);//isteği aldık
    if(req.url=="/"){
        fs.readFile("index.html",(err,html)=>{
        res.write(html);
        res.end();
        });
        //res.write("<h1>ANASAYFA</h1>")
    }
    /*else if(req.url=="/urunler"){
        res.write("<h1>ÜRÜNLER</h1>")
    }
    else
    {
        res.write("sayfa bulunamadı")
    }*/
    
    //res.end();//cevabı gönderdik şuanlık bi cevabımız yok yani durduk aslında
});

//3000 port altında server açılabilir demek
server.listen(3000,()=>{
    console.log("node.js server at port 3000")
});