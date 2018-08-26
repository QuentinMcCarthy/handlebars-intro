const express = require("express");

const router = express.Router();

router.get(`/`, (req,res) => res.end(`/about`));
router.get(`/us`, (req,res) => res.end(`/about/us`));
router.get(`/product`, (req,res) => res.end(`/about/product`));

module.exports = router;
