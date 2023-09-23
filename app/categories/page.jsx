"use client";

import ADD_CATEGORY from "@/apis/categories/addCategory";
import CardComponent from "@/components/webComponents/CardComponent";
import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

export default function Categories() {
  const { push } = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const fomrData = new FormData(e.target);

    const data = Object.fromEntries(fomrData);

    ADD_CATEGORY(data);
  }

  return (
    <CardComponent title="Add categories">
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
        <input name="name" type="name" placeholder="Category Name" />

        <button name="button" type="submit">
          Submit
        </button>
      </form>
    </CardComponent>
  );
}
