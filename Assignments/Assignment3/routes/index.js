const express = require('express');
const router = express.Router();

// Updated product data to match project.html (with correct sizes)
const products = [
    {
        name: "Frankel Dress",
        price: 695,
        mainImage: "franke1.png",
        hoverImage: "franke2.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"]
    },
    {
        name: "Frankel Strappy Dress",
        price: 1195,
        mainImage: "franke3.png",
        hoverImage: "franke4.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"]
    },
    {
        name: "Benoto Mini Dress",
        price: 695,
        mainImage: "benoto-mini1.png",
        hoverImage: "benoto-mini2.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"]
    },
    {
        name: "Benoto Wrap Dress",
        price: 795,
        mainImage: "betno.png",
        hoverImage: "betno1.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"]
    },
    {
        name: "Castell Dress",
        price: 845,
        mainImage: "castel.png",
        hoverImage: "castel1.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"]
    }
];

// Home page route
router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Temperley London',
        products: products
    });
});

module.exports = router; 