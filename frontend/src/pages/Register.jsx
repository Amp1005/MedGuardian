import React, { useState } from "react";
import Footer from "../components/Footer";
import bgImage from "../assets/home-bg-im.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error("Registration Error:", err));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Animated Content */}
      <motion.div
        className="relative z-20 w-full flex flex-col items-center px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Header with animation */}
        <motion.header
          className="text-white text-3xl font-bold mb-6 text-center drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Welcome to <span className="text-blue-400">HealthCare Portal</span>
        </motion.header>

        {/* Animated Register Form Card */}
        <motion.div
          className="p-8 w-full max-w-md bg-white/10 backdrop-blur-lg text-white rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-5">
            Patient Register
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="mb-2 font-medium text-sm">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
              type="text"
              placeholder="Enter your first name"
              className="mb-4 p-2 bg-white/20 text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
            />

            <label className="mb-2 font-medium text-sm">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
              type="text"
              placeholder="Enter your last name"
              className="mb-4 p-2 bg-white/20 text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
            />

            <label className="mb-2 font-medium text-sm">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              placeholder="Enter your email"
              className="mb-4 p-2 bg-white/20 text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
            />

            <label className="mb-2 font-medium text-sm">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              type="password"
              placeholder="Enter your password"
              className="mb-4 p-2 bg-white/20 text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
            />

            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:from-blue-600 hover:to-blue-800"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-white/80">
            Already have an account?{" "}
            <a href="/login" className="text-blue-300 underline">
              Login here
            </a>
          </p>
        </motion.div>
      </motion.div>

      {/* Optional footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
