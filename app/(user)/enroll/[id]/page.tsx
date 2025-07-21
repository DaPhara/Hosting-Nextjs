// type PropsParams = {
//   params: {
//     id: number;
//   };
//   searchParams: any;
// };

import CardDetailComponent from "@/components/card/CardDetailComponents";
import { Metadata, ResolvingMetadata } from "next";

// const ENDPOINT = "https://fakestoreapi.com/products/";

// export const getData = async (id: number) => {
//   const res = await fetch(`${ENDPOINT}${id}`);
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

// export default async function Detail(props: PropsParams) {
//   let data = await getData(props.params.id);
//   return (
//     <div>
//       <div className="h-screen grid place-content-center text-4xl font-bold text-blue-700">
//         {/* <h2>{props.searchParams}</h2> */}
//         <h2>{props.params.id}</h2>
//       </div>
//     </div>
//   );
// }

// type PropsParams = {
//   params: Promise<{ id: number }>; // params is now a Promise
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // searchParams as Promise
// };

// const ENDPOINT = "https://fakestoreapi.com/products/";

// const getData = async (id: number) => {
//   const res = await fetch(`${ENDPOINT}${id}`);
//   if (!res.ok) throw new Error("Failed to fetch product");
//   const data = await res.json();
//   // console.log(data);
//   return data;
// };

// export default async function Detail(props: PropsParams) {
//   const params = await props.params; // Await params to resolve the Promise
//   const data = await getData(params.id); // Use params.id after awaiting

//   return (
//     <div>
//       <div className="h-screen grid place-content-center">
//         {/* <h2>Product ID: {params.id}</h2> */}
//         {/* Render product data */}
//         <div>
//           <CardDetailComponent
//             title={data?.title || "No title"}
//             image={data?.image || "No image"}
//             description={
//               data?.description ||
//               "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: string) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data = await res.json();
  // console.log(data);
  return data;
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;

  // fetch product information
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      // images: [product.image, ...previousImages],
      images: product.image,
    },
  };
}

export default async function Detail(props: Props) {
  const params = await props.params; // Await params to resolve the Promise
  const data = await getData(params.id); // Use params.id after awaiting

  return (
    <div>
      <div className="h-screen grid place-content-center">
        {/* <h2>Product ID: {params.id}</h2> */}
        {/* Render product data */}
        <div>
          <CardDetailComponent
            title={data?.title || "No title"}
            image={data?.image || "No image"}
            description={
              data?.description ||
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            }
          />
        </div>
      </div>
    </div>
  );
}
// export default function Page({ params, searchParams }: Props) {}
