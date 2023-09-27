"use client";

import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";

export default function ManageCategoriesTable({ columns, data }) {
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
