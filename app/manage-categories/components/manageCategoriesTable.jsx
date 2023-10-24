"use client";

import DELETE_CATEGORY_BY_ID from "@/apis/categories/deleteCategoryById";
import UPDATE_CATEGORY_BY_ID from "@/apis/categories/updatedCategory";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";

export default function ManageCategoriesTable({ columns, data }) {
  columns && data && console.log({ columns, data });
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
        onRowRemoving={(e) => DELETE_CATEGORY_BY_ID(e.data.id)}
        onRowUpdated={(e) => {
          console.log(e);
          const { id, ...data } = e.data;

          UPDATE_CATEGORY_BY_ID(data, id);
        }}
      />
    </CardComponent>
  );
}
