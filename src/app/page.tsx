"use client";
import ECommerce from "@/components/Dashboard/E-commerce";
import { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // State to track authentication status
  const [loading, setLoading] = useState<boolean>(true); // State to track loading
  const router = useRouter(); // For navigation

  useEffect(() => {
    // Check for authentication token in localStorage
    const token = localStorage.getItem('authToken'); // Assume 'authToken' is stored in localStorage

    if (token) {
      setIsAuthenticated(true); // If token exists, set user as authenticated
    } else {
      setIsAuthenticated(false); // If no token, redirect to sign-in
      router.push("/signin");
    }

    setLoading(false); // Stop loading once authentication is checked
  }, [router]);

  if (loading) return <div>Loading...</div>; // Show loading while checking authentication

  return (
    <DefaultLayout>
      {isAuthenticated ? <ECommerce /> : <div>Redirecting to Sign-in...</div>} {/* Show dashboard if authenticated */}
    </DefaultLayout>
  );
}
