"use client";

import { useEffect, useState } from "react";
import ManageSizesTable from "./components/manageSizesTable";
import GET_SIZES from "@/apis/sizes/getSizes";

export default function ManageSizes() {
  const [sizesData, setSizsData] = useState(null);

  async function getColorsData() {
    const sizesData = await GET_SIZES();
    setSizsData(sizesData?.sizes);
  }

  useEffect(() => {
    getColorsData();
  }, []);

  useEffect(() => {
    console.log(sizesData);
  }, [sizesData]);

  function getCols() {
    const colData = sizesData[0];
    delete colData.id;

    const columns = Object.keys(colData).map((el) => {
      return { field: el, caption: el };
    });

    return columns;
  }

  function getData() {
    const data = sizesData?.map((el) => {
      delete el.id;
      return el;
    });

    return data;
  }

  return (
    sizesData && <ManageSizesTable coloumns={getCols()} data={getData()} />
  );
}
