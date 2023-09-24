import { ApiBaseUrl } from "@/Services/Config";
import AddProductTable from "./components/addProductTable";
import { cookies } from "next/headers";

export async function getData() {
  const res = await fetch(ApiBaseUrl + "categories", {
    cache: "no-store",
    headers: { Cookie: cookies().toString() },
  });

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   console.log("error");
  //   return [];
  // }

  const data = await res.json();

  if (data.message) {
    console.log(data);
    return [];
  }

  return data;
}

export default async function Products() {
  const categoryData = await getData();
  return <AddProductTable categoryData={categoryData} />;
}
