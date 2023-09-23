import { ApiBaseUrl } from "@/Services/Config";
import GET_USERS from "@/apis/user/getUser";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import { cookies } from "next/headers";

export async function getData() {
  const res = await fetch(ApiBaseUrl + "user", {
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

export default async function ManageUsers() {
  const userData = await getData();

  const colData = userData?.users[0];
  delete colData.id;
  delete colData.cart;

  const columns = Object.keys(colData).map((el) => {
    return { field: el, caption: el };
  });

  const data = userData.users.map((el) => {
    delete el.id;
    delete el.cart;
    return el;
  });

  return (
    <CardComponent title="Manage users">
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
