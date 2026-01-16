import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-oswald selection:bg-armory-orange selection:text-black">
      <Navbar />
      <Hero />
      <ProductGrid />

      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2024 Rusty Oak Armory Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
