"use client";
import { ProductType } from "@/lib/definition";
import { JSX, useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import Image from "next/image";

export default function Page() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [productDetails, setProductDetail] = useState<ProductType | null>(null);
  const [imagePlaceholder, setImagePlaceHolder] = useState<string>(
    "https://blocks.astratic.com/img/general-img-landscape.png"
  );

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  const handleViewProduct = (productData: ProductType) => {
    setProductDetail(productData);
    setOpenModal(true);
  };
  const columns: TableColumn<ProductType>[] = [
    {
      name: "NO.",
      selector: (row) => row.id,
    },
    {
      name: "Product Title",
      selector: (row) => row.title,
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Image",
      selector: (row): JSX.Element | any => (
        <img className="w-16 h-16" src={row.image} alt={row.image} />
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row): JSX.Element | any => (
        <div onClick={() => handleViewProduct(row)}>
          <button className="m-2 border-1 rounded-xl bg-blue-600 p-2 cursor-pointer">
            View
          </button>
          <button className="m-2 border-1 rounded-xl bg-yellow-500 p-2 cursor-pointer">
            Edit
          </button>
          <button className="border-2 rounded-xl bg-red-500 p-2 cursor-pointer">
            Delete
          </button>
        </div>
      ),
      sortable: true,
    },
  ];

  return (
    <main className="h-screen none-scroll-bar">
      <DataTable
        columns={columns}
        data={product}
        pagination
        progressPending={loading}
        fixedHeader
        striped
        pointerOnHover
        highlightOnHover
        customStyles={customStyles}
      />

      <Modal
        dismissible
        show={openModal}
        size="sm"
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader className="text-center">
          {productDetails?.title}
        </ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <Image
              src={productDetails?.image || imagePlaceholder}
              alt={productDetails?.title || "No Atl"}
              width={200}
              height={150}
            />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productDetails?.description}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <h3 className="flex items-center font-bold text-md text-white px-5 ">
            {productDetails?.category}
          </h3>
          <h3 className="font-bold text-xl text-red-600">
            {productDetails?.price}
          </h3>
        </ModalFooter>
      </Modal>
    </main>
  );
}

//  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "38px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "1.2rem",
      font: "bold",
    },
  },
  cells: {
    style: {
      paddingLeft: "38px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
