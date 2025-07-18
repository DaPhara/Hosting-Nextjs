// import React from "react";

// type PropsParams = {
//   params: {
//     slug: string; // Changed to string, as Next.js params are strings
//   };
//   searchParams: any;
// };

// const ENDPOINT = "https://fakestoreapi.com/products/";

// const getData = async (slug: number) => {
//   const res = await fetch(`${ENDPOINT}${slug}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// };

// export default async function Detail({ params }: PropsParams) {
//   const { slug } = await params; // Await params to resolve the dynamic route parameter
//   const data = await getData(parseInt(slug)); // Convert string id to number for API
//   console.log("datataaa:", data);

//   return (
//     <div>
//       <div className="h-screen grid place-content-center text-4xl font-bold text-blue-700">
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       </div>
//     </div>
//   );
// }

//in production
import { NextPage } from "next";
import React from "react";

type PropsParams = {
  params: Promise<{ slug: string }>; // Dynamic params as Promise
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // searchParams as Promise
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (slug: number) => {
  const res = await fetch(`${ENDPOINT}${slug}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

const Detail: NextPage<PropsParams> = async ({ params, searchParams }) => {
  const { slug } = await params; // Await params to resolve the dynamic route parameter
  const queryParams = await searchParams;
  queryParams; // Await searchParams to resolve query parameters
  const data = await getData(parseInt(slug)); // Convert string slug to number for API

  console.log("datataaa:", data);
  console.log("queryParams:", queryParams); // Log queryParams if needed

  return (
    <div>
      <div className="h-screen grid place-content-center text-4xl font-bold text-blue-700">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Detail;
