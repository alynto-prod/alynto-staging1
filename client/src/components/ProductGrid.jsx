import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real app we would fetch from the API
        // fetch('http://localhost:5000/api/products')
        //   .then(res => res.json())
        //   .then(data => {
        //     setProducts(data);
        //     setLoading(false);
        //   })
        //   .catch(err => {
        //     console.error("Failed to fetch products", err);
        //     setLoading(false);
        //   });

        // Using mock data for immediate display if API isn't ready
        const mockProducts = [
            { _id: 1, name: "Tactical Combat Shirt", price: 45.99, image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=60", category: "Apparel" },
            { _id: 2, name: "Spec-Ops Backpack", price: 89.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60", category: "Gear" },
            { _id: 3, name: "Armory Badge Cap", price: 24.99, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89d?w=600&auto=format&fit=crop&q=60", category: "Apparel" },
            { _id: 4, name: "Heavy Duty Belt", price: 35.00, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=60", category: "Gear" },
        ];
        setProducts(mockProducts);
        setLoading(false);
    }, []);

    return (
        <section className="py-20 bg-armory-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="text-armory-orange font-bold uppercase tracking-widest text-sm">New Arrivals</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 uppercase">Fresh Gear</h2>
                    </div>
                    <a href="#" className="hidden md:block text-gray-400 hover:text-white border-b border-gray-600 hover:border-white transition-all pb-1">View All Products</a>
                </div>

                {loading ? (
                    <div className="text-white text-center">Loading gear...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product._id} className="group relative bg-black border border-gray-800 hover:border-armory-orange transition-all duration-300">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-900 relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-[300px] w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-4 right-4 bg-armory-orange text-black font-bold px-2 py-1 text-xs">
                                        NEW
                                    </div>
                                    {/* Quick Add Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="bg-white text-black px-6 py-3 font-bold uppercase hover:bg-armory-orange transition-colors flex items-center gap-2">
                                            <ShoppingBag size={18} /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-white group-hover:text-armory-orange transition-colors">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    <p className="mt-2 text-xl font-bold text-white">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
