"use client";

import CardComponent from "@/components/webComponents/CardComponent";
import ADD_PRODUCT from "@/apis/products/addProduct";
import { useState } from "react";

export default function AddProductTable({
  categoryData,
  colorsData,
  sizeData,
}) {
  console.log(colorsData, "catDaaaaaa");
  console.log(sizeData, "sizeData");
  const [colorIds, setcolorIds] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    ADD_PRODUCT({
      ...data,
      colorIds,
    });

    // console.log(
    //   {
    //     ...data,
    //     colorIds,
    //   },
    //   "data"
    // );
  }
  async function handleSubmitColors(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);
    const colorIds = Object.values(data);

    setcolorIds(colorIds);
  }

  function renderColorCheckBoxes() {
    return colorsData.colors.map((el, index) => {
      return (
        <div>
          <input value={el.id} type="checkbox" id={index} name={el.name} />
          <label for={index}>{el.name}</label>
        </div>
      );
    });
  }

  function renderSizes() {
    return (
      <select name="sizeId" placeholder="Sizes">
        <option value="">--Sizes--</option>
        {sizeData.sizes.map((el) => (
          <option itemType="number" value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <>
      <CardComponent title="Add product">
        <>
          <form
            onSubmit={handleSubmit}
            style={{ padding: 10, display: "flex", flexDirection: "column" }}
          >
            <input name="name" type="text" placeholder="Name" />
            <input name="price" type="number" placeholder="Price" />
            <input name="desc" type="text" placeholder="Description" />
            <input name="quantity" type="number" placeholder="Quantity" />

            {/* Categories */}
            <select name="categoryId" placeholder="Categories">
              <option value="">--Categories--</option>
              {categoryData?.map((el) => (
                <option itemType="number" value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>

            {/* Sizes */}
            {renderSizes()}

            <button style={{ marginTop: 30 }} name="button" type="submit">
              Submit
            </button>
          </form>

          {/* Colors Form */}
          {/* <form onSubmit={handleSubmitColors}>
          <select name="sizeId" placeholder="Sizes">
            <option value="">--Sizes--</option>
            {sizeData.sizes.map((el) => (
              <option itemType="number" value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          {colorsData.colors.map((el, index) => (
            <div>
              <input value={el.id} type="checkbox" id={index} name={el.name} />
              <label for={index}>{el.name}</label>
            </div>
          ))}
          <button style={{ marginTop: 30 }} name="button" type="submit">
            Submit
          </button>
        </form> */}
        </>
      </CardComponent>

      <CardComponent title="Add Details">
        <form
          onSubmit={handleSubmitColors}
          style={{ display: "flex", flexDirection: "row" }}
        >
          {renderColorCheckBoxes()}

          <button style={{ marginTop: 30 }} name="button" type="submit">
            Submit
          </button>
        </form>
      </CardComponent>
    </>
  );
}
