"use client";

import CardComponent from "@/components/webComponents/CardComponent";
import ADD_PRODUCT from "@/apis/products/addProduct";

export default function AddProductTable({categoryData}) {
  async function handleSubmit(e) {
    e.preventDefault();
    const fomrData = new FormData(e.target);

    const data = Object.fromEntries(fomrData);

    ADD_PRODUCT(data);
  }

  console.log(categoryData,"cat Dataaaaa");

  return (
    <CardComponent title="Add product">
      <form
        onSubmit={handleSubmit}
        style={{ padding: 10, display: "flex", flexDirection: "column" }}
      >
        <input name="name" type="text" placeholder="Name" />
        <input name="price" type="number" placeholder="Price" />
        <input name="description" type="text" placeholder="Description" />

        <button name="button" type="submit">
          Submit
        </button>
      </form>
    </CardComponent>
  );
}
