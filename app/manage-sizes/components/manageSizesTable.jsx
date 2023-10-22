"use client";

import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";

export default function ManageSizesTable({ columns, data }) {
  columns && data && console.log({ columns, data });
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
      />
    </CardComponent>
  );
}
