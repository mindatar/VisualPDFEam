'use strict'
const Api404Error = require('./api404Error')
var express = require('express'),
    fs = require('fs'),
    app = express()

//var URLactual = window.location;
//#	alert(URLactual);

//#	console.log('url : ', URLactual)

app.get('/read_ie/:filename', function (req, res) {
	//const error = new Error('un error ha ocurrido ')
	console.log ( 'directorio : ' , __dirname)
    var filePath = "/public/informe_entrega/"+ req.params.filename;

    fs.readFile(__dirname + filePath , function (err,data){
    	if (err){
    		//res.writeHead (404, {'Content-type ' :  ' text/html'})
    		//res.end()
    		//console.log ( ' esto es impreso :',error.stack)
    		//throw new Api404Error(`File id: ${req.params.filename} not found.`)
    		res.writeHead(400,{'Content-Type': 'text/html'})	
    		res.end()
    	}

    	else {
    		res.contentType("application/pdf");
        	res.send(data);
        	res.end()
    	} 
    	
        
    });
});
app.get('/read_iade/:filename', function (req, res) {
	//const error = new Error('un error ha ocurrido ')
	console.log ( 'directorio : ' , __dirname)
    var filePath = "/public/iades/"+ req.params.filename;

    fs.readFile(__dirname + filePath , function (err,data){
    	if (err){
    		//res.writeHead (404, {'Content-type ' :  ' text/html'})
    		//res.end()
    		//console.log ( ' esto es impreso :',error.stack)
    		//throw new Api404Error(`File id: ${req.params.filename} not found.`)
    		res.writeHead(400,{'Content-Type': 'text/html'})	
    		res.end()
    	}

    	else {
    		res.contentType("application/pdf");
        	res.send(data);
        	res.end()
    	} 
    	
        
    });
});


app.listen(8080, function(){
    console.log('Listening on 8080');
});