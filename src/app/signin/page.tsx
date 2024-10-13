"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const router = useRouter();

  // Check and set dark mode based on the current state of the document's HTML class
  const checkDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  };

  useEffect(() => {
    // Initial check for dark mode
    checkDarkMode();

    // Listen for changes to the dark mode via media query or class change
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // Add event listener for system-level dark mode changes
    const handleDarkModeChange = () => {
      checkDarkMode();
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const lowerCaseEmail = email.toLowerCase();
    const user = localStorage.getItem(lowerCaseEmail);

    if (user) {
      const userData = JSON.parse(user);
      if (userData.password === password) {
        localStorage.setItem("authToken", lowerCaseEmail);
        router.push("/");
      } else {
        setError("Invalid password.");
      }
    } else {
      setError("User not found. Please sign up.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
        {/* Logo Display */}
        <div className="flex justify-center mb-6">
          <img
            src={isDarkMode ? "/images/logo/unify.png" : "/images/logo/unify-light.png"}
            alt="Logo"
            className="w-80 h-20"
          />
        </div>

        {error && (
          <div className="text-red-500 dark:text-red-400 mb-4">{error}</div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
