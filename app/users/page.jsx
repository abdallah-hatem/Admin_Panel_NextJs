"use client";

import LOGOUT from "@/apis/user/logout";
import SIGNUP from "@/apis/user/signup";
import CardComponent from "@/components/webComponents/CardComponent";
import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

export default function Users() {
  const { push } = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const fomrData = new FormData(e.target);

    const data = Object.fromEntries(fomrData);

    const signupData = await SIGNUP(data);

    // if (loginData) {
    //   const cookieData = await GET_COOKIE();
    //   if (cookieData) {
    //     Cookies.set("jwt", cookieData.cookie, { expires: 7 });
    //     push("/");
    //   }
    // }
  }

  async function handleLogout() {
    const logout = await LOGOUT();
    // Cookies.remove("jwt");

    logout && push("/login");
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

      <button name="button" onClick={handleLogout}>
        Logout
      </button>
    </CardComponent>
  );
}
