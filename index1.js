const express=require("express");

const app =express();
app.set("view engine","ejs");//ejs i tanımladık

app.use(express.static('public')); //static olan expressi tanımladık css dosyaları resimler falan statiktir
app.use(express.static('node_modules')); //node_modules ü yaptık çünkü bootstrap kullancaz ve bs node_modules in altında




const data=[
    {id:1,name:"iphone 14",price:30000},
    {id:2,name:"iphone 15",price:40000},
    {id:3,name:"iphone 16",price:50000}
];
app.use("/static",function(req,res){  
    res.render("static");
});
app.use("/products/:id",function(req,res){  //http://127.0.0.1:4000/products/1 diye aratmamız gerek bunda
    const urun=data.find(u=>u.id==req.params.id);
    res.render("products1",urun);//obje gönderdik yine
});
app.use("/products/:id",function(req,res){  
    res.render("product-details");//ejs viewi çağırdık render kullandık
   
});
app.use("/products",function(req,res){  
    res.render("products",{   //objeyle gönderiyoruz
        liste: data
    });
   
});
app.use("/products/:id",function(req,res){  
    res.send("product details"+req.params.id);
   
});
app.use("/products/:id",function(req,res){   // : dan sonrasını bir parametre olduğunu anlıyor
    res.send(req.params);
    res.send("anasayfa");
});
app.use("/",function(req,res){  //bu bşr middlware dir urlden / geldiğinde çağrılacak olan fonksiyonu gösterir
    res.send("anasayfa");
    
});
app.use("/ahmet",function(req,res){  //bunun yazmasını istiyosan / olanın önüne alcan
    res.send("ahmet");
});
app.listen(4000,()=>{
    console.log("selam")
});