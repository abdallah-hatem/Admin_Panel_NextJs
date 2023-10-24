"use client";

import ADD_SIZE from "@/apis/sizes/addSize";
import CardComponent from "@/components/webComponents/CardComponent";
import isAuthenticated from "@/components/webComponents/IsAuth";

function Sizes() {
  async function handleSubmit(e) {
    e.preventDefault();
    const fomrData = new FormData(e.target);

    const data = Object.fromEntries(fomrData);

    ADD_SIZE(data);
  }

  return (
    <CardComponent title="Add size">
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
        <input name="name" type="name" placeholder="Size Name" />

        <button name="button" type="submit">
          Submit
        </button>
      </form>
    </CardComponent>
  );
}
export default isAuthenticated(Sizes);
