"use client";

import DELETE_COLOR_BY_ID from "@/apis/colors/deleteColorById";
import UPDATE_COLOR_BY_ID from "@/apis/colors/updatedColors";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";

export default function ManageColorsTable({ columns, data }) {
  columns && data && console.log({ columns, data });
  return (
    <CardComponent title="Manage colors">
      <MasterTable
        allowDelete
        allowUpdate
        allowPaging
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        onRowRemoving={(e) => DELETE_COLOR_BY_ID(e.data.id)}
        onRowUpdated={(e) => {
          const { id, ...data } = e.data;

          UPDATE_COLOR_BY_ID(data, id);
        }}
      />
    </CardComponent>
  );
}
