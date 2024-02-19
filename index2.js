
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    const config = {
        server: 'DESKTOP-L6D8PMO\SQLEXPRESS',
        database: 'Restaurant',
        options: {
          trustedConnection: true
        }
      };
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err){
            console.log(err)
        };
        console.log("BAĞLANDI")
        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Food', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            //res.send(recordset);
            console.log(recordset);
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server BAĞLANDI');
});