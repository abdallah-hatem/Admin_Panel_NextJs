"use client";

import { useEffect, useState } from "react";
import ManageSizesTable from "./components/manageSizesTable";
import GET_SIZES from "@/apis/sizes/getSizes";
import isAuthenticated from "@/components/webComponents/IsAuth";

function ManageSizes() {
  const [sizesData, setSizsData] = useState([]);

  function getColorsData() {
    GET_SIZES().then((data) => setSizsData(data.sizes));
  }

  useEffect(() => {
    getColorsData();
  }, []);

  useEffect(() => {
    console.log(sizesData);
  }, [sizesData]);

  function getCols() {
    function hiddenColumns(el) {
      const hiddenColumns = ["id"];
      return hiddenColumns.includes(el);
    }

    const colData = sizesData[0];

    const columns = Object.keys(colData).map((el) => {
      return {
        field: el,
        caption: el,
        visible: !hiddenColumns(el),
      };
    });

    return columns;
  }

  function getData() {
    return sizesData;
  }

  return sizesData.length > 0 ? (
    <ManageSizesTable columns={getCols()} data={getData()} />
  ) : (
    <h3>please add Size first</h3>
  );
}

export default isAuthenticated(ManageSizes);
