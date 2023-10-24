"use client";

import DELETE_SIZE_BY_ID from "@/apis/sizes/deleteSizeById";
import UPDATE_SIZE_BY_ID from "@/apis/sizes/updateSize";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";

export default function ManageSizesTable({ columns, data }) {
  return (
    <CardComponent title="Manage sizes">
      <MasterTable
        allowDelete
        allowUpdate
        allowPaging
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        onRowRemoved={(e) => DELETE_SIZE_BY_ID(e.data.id)}
        onRowUpdated={(e) => {
          const { id, ...data } = e.data;

          UPDATE_SIZE_BY_ID(data, id);
        }}
      />
    </CardComponent>
  );
}
