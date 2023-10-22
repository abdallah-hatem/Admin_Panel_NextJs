"use client";

import ADD_COLOR from "@/apis/colors/addColors";
import CardComponent from "@/components/webComponents/CardComponent";

export default function Colors() {
  async function handleSubmit(e) {
    e.preventDefault();
    const fomrData = new FormData(e.target);

    const data = Object.fromEntries(fomrData);

    ADD_COLOR(data);
  }

  return (
    <CardComponent title="Add colors">
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
        <input name="name" type="name" placeholder="Color Name" />

        <input name="hex" type="text" placeholder="Hex" />

        <button name="button" type="submit">
          Submit
        </button>
      </form>
    </CardComponent>
  );
}
