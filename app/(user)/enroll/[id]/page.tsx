// type PropsParams = {
//   params: {
//     id: number;
//   };
//   searchParams: any;
// };

import CardDetailComponent from "@/components/card/CardDetailComponents";

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

type PropsParams = {
  params: Promise<{ id: number }>; // params is now a Promise
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // searchParams as Promise
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: number) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data = await res.json();
  // console.log(data);
  return data;
};

export default async function Detail(props: PropsParams) {
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
