"use client";
import CardComponent from "@/components/webComponents/CardComponent";
import MasterTable from "@/components/webComponents/MasterTable/MasterTable";
import { Fragment, useEffect, useState } from "react";
import { Column, Button } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react/popup";
import DELETE_PRODUCT from "@/apis/products/deleteProduct";

export default function ProductsTable({ columns, data }) {
  data && console.log(data, "dataaaaaaa");
  const [isPopUp, setIsPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    const data = popUpData?.QtySizeColor;

    let sizes = [];
    data?.forEach((el) => {
      !sizes.includes(el.size.name) && sizes.push(el.size.name);
    });

    const finalData = [];
    sizes.forEach((size) => {
      let colors = [];
      data.map((el) => el.size.name === size && colors.push(el.color.name));

      finalData.push({
        size: size,
        colors,
      });
    });

    const test = [];
    finalData.map((el) =>
      el.colors.map((el2) => test.push({ size: el.size, color: el2 }))
    );

    const qts = [];
    test.forEach((el) => {
      let sum = 0;
      data.forEach((el2) => {
        if (el.size === el2.size.name && el.color === el2.color.name) {
          sum += el2.quantity;
          qts.push({
            size: el.size,
            color: el.color,
            qty: sum,
          });
        }
      });
    });

    // console.log(test, "test");
    // console.log(qts, "qts");
    // console.log(data, "data");
    // console.log(finalData, "finaldataa");

    const final = qts.map((el) => {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <p>{el.size}</p>
            <p>{el.color}</p>
            <p>{el.qty}</p> */}
          <p>sdsdsdds</p>
        </div>
      );
    });

    setFinalData(qts);
  }, [popUpData]);

  function getData() {
    console.log(finalData, "finData");
    const data = finalData.map((el) => {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>
            {el.size} , {el.color} , {el.qty}
          </p>
        </div>
      );
    });
    return data;
  }

  function handleDelete(e) {
    const id = e.data.id;
    DELETE_PRODUCT(id);
  }

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
        console.log(e);
      },
    },
    {
      name: "delete",
    },
  ];

  const popUp = [
    {
      title: "Details",
      height: "auto",
      visible: isPopUp,
      hideOnOutsideClick: true,
      onHiding: () => setIsPopUp(false),
      children: getData(),
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
        onRowRemoved={(e) => handleDelete(e)}
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
      </MasterTable>
    </CardComponent>
  );
}
