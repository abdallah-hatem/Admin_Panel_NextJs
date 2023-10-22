"use client";
import AddProductTable from "./components/addProductTable";
import { useEffect, useState } from "react";
import GET_COLORS from "@/apis/colors/getColors";
import GET_SIZES from "@/apis/sizes/getSizes";
import GET_CATEGORIES from "@/apis/categories/getCategories";

export default function Products() {
  const [colorsData, setColorsData] = useState(null);
  const [sizesData, setSizesData] = useState(null);
  const [categoriesData, setCategoriesData] = useState(null);

  useEffect(() => {
    GET_COLORS().then((data) => setColorsData(data?.colors));
    GET_SIZES().then((data) => setSizesData(data?.sizes));
    GET_CATEGORIES().then((data) => setCategoriesData(data?.categories));
  }, []);

  useEffect(() => {
    console.log(colorsData, "colorsdataaa");
    console.log(sizesData, "sizeDataaa");
    console.log(categoriesData, "categoriesData");
  }, [colorsData, sizesData, categoriesData]);

  return (
    colorsData &&
    sizesData &&
    categoriesData && (
      <AddProductTable
      colorsData={colorsData}
      categoriesData={categoriesData}
      sizesData={sizesData}
      />
    )
  );
}
