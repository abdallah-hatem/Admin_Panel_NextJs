"use client";
import ManageColorsTable from "./components/manageColorsTable";
import { useEffect, useState } from "react";
import GET_COLORS from "@/apis/colors/getColors";
import isAuthenticated from "@/components/webComponents/IsAuth";

function ManageColors() {
  const [colorsData, setColorsData] = useState([]);

  async function getColorsData() {
    const colorsData = await GET_COLORS();
    setColorsData(colorsData?.colors);
  }

  useEffect(() => {
    getColorsData();
  }, []);

  useEffect(() => {
    console.log(colorsData);
  }, [colorsData]);

  function getCols() {
    function hiddenColumns(el) {
      const hiddenColumns = ["id"];
      return hiddenColumns.includes(el);
    }
    const colData = colorsData[0];

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
    return colorsData;
  }

  return colorsData.length > 0 ? (
    <ManageColorsTable columns={getCols()} data={getData()} />
  ) : (
    <h3>please add colors first</h3>
  );
}

export default isAuthenticated(ManageColors);
