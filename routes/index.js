var express = require('express');
var router = express.Router();
var fs=require("fs")
/* GET home page. */
router.post('/lxl', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
	fs.readFile('read.txt','utf-8',function(err,data){
		fs.writeFile('read.txt',JSON.stringify(data),function(){
			res.send({username:req.body.username,txt:req.body.txt});
		})
		
		
	})
	
});

module.exports = router;
