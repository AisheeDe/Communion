import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.h1
        className="text-5xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Connecting People Across Faiths & Interests
      </motion.h1>

      <motion.p
        className="text-lg mt-4 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Join events, engage with communities, and explore new opportunities to connect with like-minded individuals.
      </motion.p>

      <motion.button
        className="mt-6 px-8 py-3 bg-yellow-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg"
        onClick={() => navigate("/events")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore Events
      </motion.button>
    </div>
  );
};

export default Home;
