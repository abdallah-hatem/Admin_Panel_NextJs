import { ApiBaseUrl } from "@/Services/Config";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import { cookies } from "next/headers";

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

  const colData = categoriesData?.categories[0];
  delete colData.id;

  const columns = Object.keys(colData).map((el) => {
    return { field: el, caption: el };
  });

  const data = categoriesData.categories.map((el) => {
    delete el.id;
    return el;
  });

  return (
    <CardComponent title="Manage categories">
      <MasterTable
        allowDelete
        allowUpdate
        allowPaging
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
      />
    </CardComponent>
  );
}
