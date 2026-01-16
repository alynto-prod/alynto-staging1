const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/rustyoakclone';

const dummyProducts = [
    {
        name: "Tactical Combat Shirt",
        price: 45.99,
        image: "https://placehold.co/400x500/000000/FF6000?text=Tactical+Shirt",
        category: "Apparel",
        description: "Breathable, durable, and ready for action."
    },
    {
        name: "Spec-Ops Backpack",
        price: 89.99,
        image: "https://placehold.co/400x500/000000/FF6000?text=Backpack",
        category: "Gear",
        description: "High capacity backpack with MOLLE system."
    },
    {
        name: "Armory Badge Cap",
        price: 24.99,
        image: "https://placehold.co/400x500/000000/FF6000?text=Cap",
        category: "Apparel",
        description: "Embroidered logo cap. One size fits all."
    },
    {
        name: "Heavy Duty Belt",
        price: 35.00,
        image: "https://placehold.co/400x500/000000/FF6000?text=Belt",
        category: "Gear",
        description: "Reinforced nylon belt with quick-release buckle."
    },
    {
        name: "Combat Boots",
        price: 120.00,
        image: "https://placehold.co/400x500/000000/FF6000?text=Boots",
        category: "Footwear",
        description: "Rugged boots for any terrain."
    },
    {
        name: "Tactical Gloves",
        price: 29.99,
        image: "https://placehold.co/400x500/000000/FF6000?text=Gloves",
        category: "Gear",
        description: "Knuckle protection and high dexterity."
    }
];

mongoose.connect(MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');

        // Clear existing data
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Insert new data
        await Product.insertMany(dummyProducts);
        console.log('Seeded database with dummy products');

        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error seeding database:', err);
        mongoose.connection.close();
    });
