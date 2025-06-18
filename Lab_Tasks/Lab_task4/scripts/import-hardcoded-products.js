const mongoose = require('mongoose');
const Product = require('../models/Product');

const products = [
    {
        name: "Frankel Dress",
        price: 695,
        mainImage: "franke1.png",
        hoverImage: "franke2.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"],
        description: "The Frankel Dress is a timeless piece featuring a delicate floral motif and a flattering silhouette. Perfect for both day and evening occasions, its soft fabric and elegant design ensure comfort and sophistication."
    },
    {
        name: "Frankel Strappy Dress",
        price: 1195,
        mainImage: "franke3.png",
        hoverImage: "franke4.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"],
        description: "The Frankel Strappy Dress exudes modern femininity with its slender straps and flowing skirt. The intricate pattern and lightweight material make it ideal for summer events and special evenings."
    },
    {
        name: "Benoto Mini Dress",
        price: 695,
        mainImage: "benoto-mini1.png",
        hoverImage: "benoto-mini2.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"],
        description: "The Benoto Mini Dress is playful and chic, featuring tiered ruffles and a cinched waist. Its youthful design and vibrant color options make it a standout choice for daytime outings."
    },
    {
        name: "Benoto Wrap Dress",
        price: 795,
        mainImage: "betno.png",
        hoverImage: "betno1.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"],
        description: "The Benoto Wrap Dress combines classic wrap styling with contemporary prints. Its adjustable fit and soft drape flatter every figure, making it a versatile wardrobe staple."
    },
    {
        name: "Castell Dress",
        price: 845,
        mainImage: "castel.png",
        hoverImage: "castel1.png",
        sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
        colors: ["Black", "Pink"],
        description: "The Castell Dress is the epitome of understated elegance. With clean lines and a minimalist silhouette, it transitions seamlessly from work to evening with effortless grace."
    }
];

async function importProducts() {
    try {
        await mongoose.connect('mongodb://localhost:27017/temperley', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        await Product.insertMany(products);
        console.log('Products imported successfully!');
    } catch (err) {
        console.error('Error importing products:', err);
    } finally {
        await mongoose.disconnect();
        process.exit();
    }
}

importProducts(); 