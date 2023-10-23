"use client";
import ManageColorsTable from "./components/manageColorsTable";
import { useEffect, useState } from "react";
import GET_COLORS from "@/apis/colors/getColors";

export default function ManageColors() {
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
    const colData = colorsData[0];
    delete colData.id;

    const columns = Object.keys(colData).map((el) => {
      return { field: el, caption: el };
    });

    return columns;
  }

  function getData() {
    const data = colorsData?.map((el) => {
      delete el.id;
      return el;
    });

    return data;
  }

  return colorsData.length > 0 ? (
    <ManageColorsTable coloumns={getCols()} data={getData()} />
  ) : (
    <h3>please add colors first</h3>
  );
}
