import { ApiBaseUrl } from "@/Services/Config";
import { cookies } from "next/headers";
import ProductsTable from "./components/productsTable";

export async function getData() {
  const res = await fetch(ApiBaseUrl + "products", {
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

export default async function ManageProducts() {
  const productsData = await getData();

  const colData = productsData?.products[0];
  delete colData.id;
  delete colData.categoryId;

  const columns = Object.keys(colData).map((el) => {
    return {
      field: el,
      caption: el,
      format: el === "price" && "currency",
      visible: !(el === "SizeToColors"),
    };
  });

  console.log(columns, "colsssssssss");

  // function getSizes(el) {
  //   const sizes = el.SizeToColors?.map((el) => el.size.name);
  //   console.log(sizes.toString(), "sizessss");
  //   return sizes;
  // }

  function getSizeToColors(product) {
    const sizeToColors = product?.SizeToColors.map((el) => {
      return { size: el.size.name, colors: el.colors.map((el2) => el2.name) };
    });

    return sizeToColors;
  }

  const data = productsData?.products?.map((el) => {
    delete el.id;
    // delete el.categoryId;
    return {
      ...el,
      Category: el.Category.name,
      SizeToColors: getSizeToColors(el),
    };
  });

  return <ProductsTable columns={columns} data={data} />;
}
