"use client";

import CardComponent from "@/components/webComponents/CardComponent";
import { useCallback, useRef, useState } from "react";
import ModalComponent from "@/components/webComponents/ModalComponent";
import AddDetailsTable from "./addDetailsTable";
import ADD_PRODUCT from "@/apis/products/addProduct";
import { Button } from "antd";

export default function AddProductTable({
  colorsData,
  categoriesData,
  sizesData,
}) {
  const defaultValues = useRef({
    desc: "",
    name: "",
    price: "",
    quantity: "",
    sizeId: "",
    categoryId: "",
  });
  const [values, setValues] = useState(defaultValues.current);

  const [isPopUp, setIsPopUp] = useState(false);
  const [sizeToColors, setSizeToColors] = useState([]);
  const [userSizes, setUserSizes] = useState([{}]);

  console.log(sizeToColors, "SizeToColorssss");

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      ...values,
      price: Number(values.price),
      categoryId: Number(values.categoryId),
      sizeToColors,
    };

    console.log(data, "dataaa");

    ADD_PRODUCT(data);
  }

  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      value: values["name"],
      onChange: handleChange,
    },
    {
      name: "price",
      type: "number",
      placeholder: "Price",
      value: values["price"],
      onChange: handleChange,
    },
    {
      name: "desc",
      type: "text",
      placeholder: "Description",
      value: values["desc"],
      onChange: handleChange,
    },
    // {
    //   name: "quantity",
    //   type: "number",
    //   placeholder: "Quantity",
    //   value: values["quantity"],
    //   onChange: handleChange,
    // },
  ];

  return (
    <>
      <CardComponent title="Add product">
        <>
          <form
            onSubmit={handleSubmit}
            style={{ padding: 10, display: "flex", flexDirection: "column" }}
          >
            {inputs.map((el) => (
              <input
                name={el.name}
                value={el.value}
                type={el.type}
                placeholder={el.placeholder}
                onChange={el.onChange}
              />
            ))}

            {/* Categories */}
            <select
              onChange={(e) => handleChange(e)}
              name="categoryId"
              placeholder="Categories"
            >
              <option value="">--Categories--</option>
              {categoriesData?.map((el) => (
                <option itemType="number" value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => setIsPopUp(true)}
              style={{ marginTop: 10, width: 90 }}
              name="button"
              type="button"
            >
              Add Details
            </button>

            {/* Colors Modal */}
            <ModalComponent isOpen={isPopUp} onCancel={() => setIsPopUp(false)}>
              <CardComponent title="Add details">
                {userSizes.map((el, index) => (
                  <AddDetailsTable
                    setSizeToColors={setSizeToColors}
                    sizeToColors={sizeToColors}
                    key={index}
                    id={index}
                    colorsData={colorsData}
                    sizesData={sizesData}
                    setUserSizes={setUserSizes}
                    userSizes={userSizes}
                  />
                ))}

                <Button
                  disabled={userSizes.length === sizesData.length}
                  onClick={() => setUserSizes((prev) => [...prev, {}])}
                >
                  Add a Size
                </Button>

                <button
                  onClick={() => {
                    setUserSizes((prev) =>
                      prev.filter((el, index) => index + 1 !== userSizes.length)
                    );
                  }}
                >
                  Remove a Size
                </button>
              </CardComponent>
            </ModalComponent>

            <button style={{ marginTop: 30 }} name="button" type="submit">
              Submit
            </button>
          </form>
        </>
      </CardComponent>
    </>
  );
}
