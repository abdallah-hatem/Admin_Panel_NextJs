"use client";
import { ApiBaseUrl } from "@/Services/Config";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import ManageCategoriesTable from "./components/manageCategoriesTable";
import { useEffect, useState } from "react";
import GET_CATEGORIES from "@/apis/categories/getCategories";

export default function ManageCategories() {
  const [categoriesData, setCategoriesData] = useState([]);

  async function getCategoriesData() {
    const categories = await GET_CATEGORIES();
    setCategoriesData(categories?.categories);
  }

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    console.log(categoriesData);
  }, [categoriesData]);

  function getCols() {
    const colData = categoriesData[0];
    delete colData.id;

    const columns = Object.keys(colData).map((el) => {
      return { field: el, caption: el };
    });

    return columns;
  }

  function getData() {
    const data = categoriesData?.map((el) => {
      delete el.id;
      return el;
    });

    return data;
  }

  return categoriesData.length > 0 ? (
    <ManageCategoriesTable coloumns={getCols()} data={getData()} />
  ) : (
    <h3>please, add categories first</h3>
  );
}
