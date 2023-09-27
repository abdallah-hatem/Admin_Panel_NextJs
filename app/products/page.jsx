import { ApiBaseUrl } from "@/Services/Config";
import AddProductTable from "./components/addProductTable";
import { cookies } from "next/headers";

export async function getCategoryData() {
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

export async function getColorsData() {
  const res = await fetch(ApiBaseUrl + "colors", {
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
export async function getSizesData() {
  const res = await fetch(ApiBaseUrl + "sizes", {
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

export default async function Products() {
  const categoryData = await getCategoryData();
  const colorsData = await getColorsData();
  const sizeData = await getSizesData();
  return (
    categoryData &&
    colorsData &&
    sizeData && (
      <AddProductTable
        colorsData={colorsData}
        categoryData={categoryData.categories}
        sizeData={sizeData}
      />
    )
  );
}
