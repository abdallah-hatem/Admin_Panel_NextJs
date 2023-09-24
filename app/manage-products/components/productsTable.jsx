"use client";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import { useState } from "react";
import { Column, Button } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react/popup";

export default function ProductsTable({ columns, data }) {
  data && console.log(data, "dataaaaaaa");
  // const [isPopUp, setIsPopUp] = useState(false);
  // const [popUpData, setPopUpData] = useState([]);

  // function getData() {
  //   const data = popUpData?.SizeToColors?.map((el) => {
  //     return (
  //       <>
  //         <p>{el.size}: </p>
  //         <p>{el.colors.map((el) => el + ", ")}</p>
  //       </>
  //     );
  //   });

  //   return data;
  // }

  // const masterButtons = [
  //   {
  //     hint: "size and colors",
  //     icon: "copy",
  //     visible: true,
  //     disabled: false,
  //     onClick: (e) => {
  //       setPopUpData(e.row.data);
  //       setIsPopUp(true);
  //     },
  //   },

  //   {
  //     hint: "Update",
  //     icon: "edit",
  //     visible: true,
  //     disabled: false,
  //     onClick: (e) => {
  //       console.log(e);
  //     },
  //   },
  //   {
  //     name: "delete",
  //   },
  // ];

  // const popUp = [
  //   {
  //     title: "Sizes & Colors",
  //     height: "auto",
  //     visible: isPopUp,
  //     hideOnOutsideClick: true,
  //     onHiding: () => setIsPopUp(false),
  //     children: getData(),
  //   },
  // ];
  return (
    <CardComponent title="Manage products">
      {/* <MasterTable
        allowDelete
        allowUpdate
        allowPaging
        columnChooser={false}
        dataSource={data}
        colAttributes={columns}
        ColoredRows
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
        {popUp.map(
          (el, index) =>
            el.visible && (
              <Popup
                key={index}
                title={el.title}
                height={el.height}
                visible={el.visible}
                hideOnOutsideClick={el.hideOnOutsideClick}
                onHiding={el.onHiding}
              >
                {el.children}
              </Popup>
            )
        )}
      </MasterTable> */}
    </CardComponent>
  );
}
