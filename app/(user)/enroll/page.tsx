"use client";
import ProductCardComponent from "@/components/card/ProductCardComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const ENDPOINT = "https://fakestoreapi.com/products/";
  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log("fetchgg", product);

  return (
    <div>
      <div className="h-screen flex flex-wrap justify-center gap-3 ">
        {product.map((product: any, index) => (
          <ProductCardComponent
            key={index}
            onClick={() => router.push(`/enroll/${product.id}`)}
            title={product?.title || "No title"}
            image={product?.image || "No Image"}
            price={product?.price || "No price"}
          />
        ))}
      </div>
    </div>
  );
}
