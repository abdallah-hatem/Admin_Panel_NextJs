"use client";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import { useState } from "react";
import { Column, Button } from "devextreme-react/data-grid";
import SizeToColorsTable from "./sizeToColorsTable";
import ModalComponent from "@/components/webComponents/ModalComponent";
import { useRouter } from "next/navigation";
import DELETE_PRODUCT from "@/apis/products/deleteProduct";

export default function ProductsTable({ columns, data }) {
  const { push } = useRouter();
  data && console.log(data, "dataaaaaaa");
  columns && console.log(columns, "Colssssss");
  const [isPopUp, setIsPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState(null);
  const [finalData, setFinalData] = useState([]);

  console.log(popUpData);

  const masterButtons = [
    {
      hint: "Details",
      icon: "copy",
      visible: true,
      disabled: false,
      onClick: (e) => {
        setPopUpData(e.row.data);
        setIsPopUp(true);
      },
    },
    {
      name: "Update",
      icon: "edit",
      visible: true,
      disabled: false,
      onClick: (e) => {
        const id = e.row.data.id;
        push(`editProduct/${id}`);
        console.log(e);
      },
    },
    {
      name: "delete",
    },
  ];

  return (
    <CardComponent title="Manage products">
      <MasterTable
        allowDelete
        allowUpdate
        allowPaging
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
        onRowRemoved={(e) => {
          DELETE_PRODUCT(e.data.id);
        }}
        editingMode="popup"
      >
        <Column type="buttons" width={120}>
          {masterButtons.map((el, index) => (
            <Button
              key={index}
              hint={el.hint}
              icon={el.icon}
              visible={el.visible}
              disabled={el.disabled}
              onClick={el.onClick}
              name={el.name}
            />
          ))}
        </Column>

        <ModalComponent isOpen={isPopUp} onCancel={() => setIsPopUp(false)}>
          <CardComponent title="Details">
            <SizeToColorsTable
              productId={popUpData?.id}
              defaultData={popUpData?.SizeToColors}
            />
          </CardComponent>
        </ModalComponent>
      </MasterTable>
    </CardComponent>
  );
}
