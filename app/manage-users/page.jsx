"use client";

import DELETE_USER_BY_ID from "@/apis/user/deleteUserById";
import GET_USERS from "@/apis/user/getUsers";
import UPDATE_USER_BY_ID from "@/apis/user/updateUser";
import CardComponent from "@/components/webComponents/CardComponent";
import isAuthenticated from "@/components/webComponents/IsAuth";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import { useEffect, useState } from "react";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    GET_USERS().then((data) => setUsers(data.users));
  }

  useEffect(() => {
    getUsers();
  }, []);

  function getCols() {
    function hiddenColumns(el) {
      const hiddenColumns = ["id", "cart", "password"];
      return hiddenColumns.includes(el);
    }

    const colData = users[0];

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
    return users;
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
          onRowRemoving={(e) => DELETE_USER_BY_ID(e.data.id)}
          onRowUpdated={(e) => {
            const { id, ...data } = e.data;

            UPDATE_USER_BY_ID(data, id);
          }}
        />
      ) : (
        <h3>please add a user first</h3>
      )}
    </CardComponent>
  );
}

export default isAuthenticated(ManageUsers);
