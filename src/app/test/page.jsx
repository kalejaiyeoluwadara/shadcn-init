"use client";
import React, { useEffect } from "react";

function Page() {
  const fetchRecipes = async () => {
    const response = await fetch("http://localhost:5000/api/v1/recipes");
    const data = await response.json();
    console.log(data.recipes);
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  return <main>Page</main>;
}

export default Page;
