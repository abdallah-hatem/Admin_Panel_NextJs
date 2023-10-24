"use client";

import SIGNUP from "@/apis/user/signup";
import CardComponent from "@/components/webComponents/CardComponent";
import isAuthenticated from "@/components/webComponents/IsAuth";

function Users() {
  async function handleSubmit(e) {
    e.preventDefault();
    const fomrData = new FormData(e.target);

    const data = Object.fromEntries(fomrData);

    const signupData = await SIGNUP(data);
  }

  return (
    <CardComponent title="Add users">
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
        <input name="name" type="name" placeholder="Name" />
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />

        <button name="button" type="submit">
          Submit
        </button>
      </form>
    </CardComponent>
  );
}
export default isAuthenticated(Users);
