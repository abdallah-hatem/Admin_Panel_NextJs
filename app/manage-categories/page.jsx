"use client";
import ManageCategoriesTable from "./components/manageCategoriesTable";
import { useEffect, useState } from "react";
import GET_CATEGORIES from "@/apis/categories/getCategories";
import isAuthenticated from "@/components/webComponents/IsAuth";

function ManageCategories() {
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
    function hiddenColumns(el) {
      const hiddenColumns = ["id"];
      return hiddenColumns.includes(el);
    }

    const colData = categoriesData[0];

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
    return categoriesData;
  }

  return categoriesData.length > 0 ? (
    <ManageCategoriesTable columns={getCols()} data={getData()} />
  ) : (
    <h3>please, add categories first</h3>
  );
}

export default isAuthenticated(ManageCategories);
