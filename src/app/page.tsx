'use client'
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";


// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
//   description: "This is Next.js Home page for NextAdmin Dashboard Kit",
// };

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
        console.log("Route API message:", data.message); // Console log the message
      })
      .catch((error) => {
        console.error("Error fetching route message:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <DefaultLayout>
        <ECommerce/> 
    </DefaultLayout>
  );
}