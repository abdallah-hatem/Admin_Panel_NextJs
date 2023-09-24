import { ApiBaseUrl } from "@/Services/Config";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import { cookies } from "next/headers";
import ManageCategoriesTable from "./components/manageCategoriesTable";

export async function getData() {
  const res = await fetch(ApiBaseUrl + "categories", {
    cache: "no-store",
    headers: { Cookie: cookies().toString() },
  });

  const data = await res.json();

  if (data.message) {
    console.log(data);
    return [];
  }

  return data;
}

export default async function ManageCategories() {
  const categoriesData = await getData();
  const validData = categoriesData.length > 0;

  const colData = validData && categoriesData?.categories[0];
  delete colData.id;

  const columns =
    validData &&
    Object.keys(colData).map((el) => {
      return { field: el, caption: el };
    });

  const data =
    validData &&
    categoriesData.categories.map((el) => {
      delete el.id;
      return el;
    });

  return <ManageCategoriesTable data={categoriesData} />;
}
