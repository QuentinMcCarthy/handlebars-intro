const express = require("express");

const router = express.Router();

router.get(`/`, function(req,res){
	// res.end(`/about`);
	res.render(`about/index`);
});

router.get(`/us`, function(req,res){
	// res.end(`/about/us`);
	res.render(`about/us`);
});

router.get(`/product`, function(req,res){
	// res.end(`/about/product`);
	res.render(`about/product`);
});

module.exports = router;
