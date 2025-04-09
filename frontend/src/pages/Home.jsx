import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import bgImage from "../assets/home-bg-im.jpg";

const Home = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 text-white"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to <span className="text-blue-400">MedGuardian</span>
        </motion.h1>

        <p className="text-base md:text-lg text-gray-200 mb-8">
          MedGuardian is an AI-powered healthcare platform that securely stores and organizes patient medical records—making them instantly accessible to verified doctors via fingerprint or OTP-based authentication. It uses open-source AI tools to analyze health data, assist in diagnosis, and provide personalized treatment recommendations.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white hover:bg-gray-100 text-blue-700 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
          >
            Register
          </Link>
        </div>
      </motion.div>

      {/* Scroll Hint Arrow */}
      {/* <motion.div
        className="absolute bottom-20 text-white text-2xl z-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        ↓
      </motion.div> */}

      {/* Footer */}
      <div className="absolute bottom-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;


