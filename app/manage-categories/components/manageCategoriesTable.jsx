"use client";

import DELETE_CATEGORY_BY_ID from "@/apis/categories/deleteCategoryById";
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
        dataSource={data ?? {}}
        colAttributes={columns ?? {}}
        ColoredRows
        onRowRemoving={(e)=>
          // DELETE_CATEGORY_BY_ID()
          console.log(e)
        }
      />
    </CardComponent>
  );
}
