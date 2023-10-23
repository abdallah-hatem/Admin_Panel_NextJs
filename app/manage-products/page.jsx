"use client";
import ProductsTable from "./components/productsTable";
import { useEffect, useState } from "react";
import GET_PRODUCTS from "@/apis/products/getProducts";
import GET_SIZES from "@/apis/sizes/getSizes";

export default function ManageProducts() {
  const [productsData, setProductsData] = useState(null);
  const [sizesData, setSizesData] = useState(null);

  async function getAllData() {
    const products = await GET_PRODUCTS();
    const sizes = await GET_SIZES();

    setProductsData(() => products?.products);
    setSizesData(() => sizes?.sizes);
  }

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    console.log({ productsData });
  }, [productsData]);

  function getCols() {
    function hiddenColumns(el) {
      const hiddenColumns = ["SizeToColors", "id", "categoryId"];
      return hiddenColumns.includes(el);
    }

    const colData = productsData[0];
    const columns = Object.keys(colData).map((el) => {
      return {
        field: el,
        caption: el,
        format: el === "price" && "currency",
        visible: !hiddenColumns(el),
      };
    });

    // manually added columns

    return columns;
  }

  function getData() {
    const data = productsData?.map((el) => {
      return {
        ...el,
        Category: el.Category.name,
      };
    });

    return data;
  }

  return sizesData && productsData && productsData?.length > 0 ? (
    <ProductsTable columns={getCols()} data={getData()} sizes={sizesData} />
  ) : (
    <h2>No Products Found</h2>
  );
}
