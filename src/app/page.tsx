"use client"; // This is a client component 👈🏽

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3000/", { credentials: "include" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  }, []);

  return <h1>Hallo</h1>;
}
