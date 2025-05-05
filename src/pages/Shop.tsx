import  { useState } from "react";



const categories = {
  Rings: [
    { name: "White Gold Baguette Ring", price: "144.99 EUR", image: "/images/white.png" },
    { name: "3 Rows of Rings", price: "249.99 EUR", image: "/images/row3.png" },
  ],
  Bracelets: [
    { name: "Italian Bracelet", price: "579.99 EUR", image: "/images/italian.png" },
    { name: "Waterway Bracelet", price: "344.99 EUR", image: "/images/water.png" },
  ],
  Necklaces: [
    { name: "Eye Necklace", price: "184.99 EUR", image: "/images/eye.png" },
    { name: "Stone Star Necklace", price: "159.99 EUR", image: "/images/star.png" },
  ],
};

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Rings");

  return (
    <div className="bg-clay min-h-screen w-full px-6 py-12 font-sans">
      <h1 className="text-4xl font-serif text-divina text-center mb-8">Shop</h1>

      <div className="flex justify-center gap-6 mb-10">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as keyof typeof categories)}
            className={`px-4 py-2 border-b-2 font-light transition-all ${
              activeCategory === cat
                ? "border-divina text-divina"
                : "border-transparent text-rosewood hover:text-divina"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories[activeCategory].map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            <h3 className="text-lg font-serif font-semibold text-divina">{product.name}</h3>
            <p className="text-rosewood mb-3">{product.price}</p>
            <button
              className="px-4 py-2 border border-divina text-divina font-light rounded hover:bg-divina hover:text-white transition-colors"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
