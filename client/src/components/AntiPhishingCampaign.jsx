import React, { useState, useEffect } from "react";
import {
  MailIcon,
  ShieldAlertIcon,
  SunIcon,
  MoonIcon
} from "lucide-react";
import { motion } from "framer-motion";
import LandingImage from "C:/Users/Lady Ayesha/Desktop/website2/CDWebsite/client/src/assets/img.png";

export default function AntiPhishingCampaign() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to submit email.");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold">🛡️ Anti-Phishing Campaign</h1>
          <div className="flex gap-6 text-blue-600 dark:text-blue-400">
            <a href="#overview" className="hover:underline">Overview</a>
            <a href="#what" className="hover:underline">What is Phishing</a>
            <a href="#spot" className="hover:underline">How to Spot</a>
            <a href="#signup" className="hover:underline">Sign Up</a>
          </div>
          <button
  onClick={() => setDarkMode(!darkMode)}
  className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm transition"
>
  {darkMode ? (
    <>
      <SunIcon className="w-4 h-4" /> Light
    </>
  ) : (
    <>
      <MoonIcon className="w-4 h-4" /> Dark
    </>
  )}
</button>

        </div>
      </nav>

      {/* Landing Image */}
      <div className="relative">
        <img
          src={LandingImage}
          alt="Animated dark computer room"
          className="w-full h-[60vh] object-cover brightness-75 rounded-b-3xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-xl text-center px-4">
            Defend Yourself Against Phishing Threats
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-12 space-y-32">
        {/* Header Section */}
        <motion.header
          id="overview"
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Stay Safe from Phishing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn how to identify and protect yourself from phishing attacks in the digital age.
          </p>
        </motion.header>

        {/* What is Phishing Section */}
        <motion.section
          id="what"
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlertIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
            <h3 className="text-2xl font-semibold">What is Phishing?</h3>
          </div>
          <p>
            Phishing is a method used by cybercriminals to trick you into giving out personal or financial information,
            often through fake emails or websites that appear legitimate.
          </p>
        </motion.section>

        {/* How to Spot Phishing */}
        <motion.section
          id="spot"
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlertIcon className="w-6 h-6 text-yellow-500 dark:text-yellow-300" />
            <h3 className="text-2xl font-semibold">How to Spot Phishing</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Check the sender's email address carefully.</li>
            <li>Look for urgent or threatening language.</li>
            <li>Beware of unexpected attachments or links.</li>
            <li>Verify with the official source before acting.</li>
          </ul>
        </motion.section>

        {/* Sign Up */}
        <motion.section
          id="signup"
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MailIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-semibold">Stay Informed</h3>
          </div>
          <p className="mb-4">
            Sign up to receive more tips and updates about phishing and how to stay protected.
          </p>
          {submitted ? (
            <div className="text-green-600 font-medium">
              ✅ Thank you! You've been signed up for updates.
            </div>
          ) : (
            <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Sign Up"}
              </button>
            </form>
          )}
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </motion.section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 pt-12">
          &copy; {new Date().getFullYear()} Anti-Phishing Awareness Campaign. Stay safe!
        </footer>
      </div>
    </div>
  );
}
