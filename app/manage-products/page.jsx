import { ApiBaseUrl } from "@/Services/Config";
import { cookies } from "next/headers";
import ProductsTable from "./components/productsTable";

export async function getData() {
  const res = await fetch(ApiBaseUrl + "products", {
    cache: "no-store",
    headers: { Cookie: cookies().toString() },

    credentials: "include",
  });

  console.log(cookies().toString(), "cookies");

  const data = await res.json();
  console.log(data, "get product data");
  if (data.message) {
    console.log(data);
    return [];
  }

  return data;
}

export default async function ManageProducts() {
  const productsData = await getData();

  const colData = productsData?.products[0];

  function hiddenColumns(el) {
    const hiddenColumns = ["SizeToColors", "QtySizeColor", "id", "categoryId"];
    return hiddenColumns.includes(el);
  }

  const columns = Object.keys(colData).map((el) => {
    return {
      field: el,
      caption: el,
      format: el === "price" && "currency",
      visible: !hiddenColumns(el),
    };
  });

  // manually added columns
  columns.push(
    { field: "sizes", caption: "Sizes" },
    { field: "colors", caption: "Colors" }
  );

  function getSizes(product) {
    const sizes = [];
    const sizeToColors = product?.QtySizeColor.map((el) => {
      if (!sizes.includes(el.size.name)) sizes.push(el.size.name);
    });

    return sizes;
  }
  function getColors(product) {
    const colors = [];

    product?.QtySizeColor.map((el) => {
      if (!colors.includes(el.color.name)) colors.push(el.color.name);
    });

    return colors;
  }

  const data = productsData?.products?.map((el) => {
    return {
      ...el,
      Category: el.Category.name,
      sizes: getSizes(el),
      colors: getColors(el),
    };
  });

  return <ProductsTable columns={columns} data={data} />;
}
