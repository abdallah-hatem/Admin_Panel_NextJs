"use client";

import GET_USERS from "@/apis/user/getUsers";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import { useEffect, useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    GET_USERS().then((data) => setUsers(data.users));
  }

  useEffect(() => {
    getUsers();
  }, []);

  function getCols() {
    const colData = users[0];
    delete colData.id;
    delete colData.cart;

    const columns = Object.keys(colData).map((el) => {
      return { field: el, caption: el };
    });

    return columns;
  }

  function getData() {
    const data = users.map((el) => {
      delete el.id;
      delete el.cart;
      return el;
    });
    return data;
  }

  return (
    <CardComponent title="Manage users">
      {users.length > 0 ? (
        <MasterTable
          allowDelete
          allowUpdate
          allowPaging
          columnChooser={false}
          dataSource={getData()}
          colAttributes={getCols()}
          ColoredRows
        />
      ) : (
        <h3>please add a user first</h3>
      )}
    </CardComponent>
  );
}
