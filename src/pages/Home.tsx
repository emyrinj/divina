
import { motion } from "framer-motion";

const bestSellers = [
  {
    name: "Eye Necklace",
    price: "184.99 EUR",
    image: "/images/eye.png",
  },
  {
    name: "Stone Star Necklace",
    price: "159.99 EUR",
    image: "/images/star.png",
  },
  {
    name: "Italian Bracelet",
    price: "579.99 EUR",
    image: "/images/italian.png",
  },
  {
    name: "3 Rows of Rings",
    price: "249.99 EUR",
    image: "/images/row3.png",
  },
];

export default function Home() {
  return (
    <div className="bg-clay min-h-screen w-full px-6 py-16 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-14"
      >
        <img src="/images/logo.png" className="w-32 h-32 rounded-sm mx-auto block mb-4" alt="Divina logo" />

        <h1 className="text-5xl md:text-6xl text-amber-950 font-serif text-divina mb-4 tracking-tight">
          Divina Jewellery
        </h1>
        <p className="text-rosewood text-lg md:text-xl font-light max-w-xl mx-auto">
          Where timeless elegance meets modern minimalism.<br />
          Every piece tells a story — crafted with inspiration, designed with purpose.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-serif text-divina mb-2">Our Best Sellers</h2>
        <p className="text-md text-rosewood font-light">
          Discover the pieces our community loves most — worn with grace, made for the divine in you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {bestSellers.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-divina font-serif">{item.name}</h3>
            <p className="text-rosewood">{item.price}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-20 px-4">
        <p className="text-divina italic text-md leading-relaxed">
          “Elegance is when the inside is as beautiful as the outside.”
          <br />
          <span className="text-rosewood text-sm">
            At Divina, we craft more than jewellery — we craft emotion, confidence, and memory.
          </span>
        </p>
      </div>
    </div>
  );
}
