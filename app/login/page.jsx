"use client";

import LOGIN from "@/apis/user/login";
import { useAuthContext } from "@/context/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const { push } = useRouter();
  const { setIsAuth } = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault();
    const fomrData = new FormData(e.target);

    const data = Object.fromEntries(fomrData);

    const loginData = await LOGIN(data);

    if (loginData) {
      const token = loginData.jwt;
      if (token) {
        const expires = 1 / 48; //30 mins
        Cookies.set("jwt", token, { expires });

        push("/");
        setIsAuth(true);
      }
    }
  }

  async function handleLogout() {
    // const logout = await LOGOUT();
    Cookies.remove("jwt", { path: "/" });
    push("/login");
  }
  return (
    <>
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button name="button" type="submit">
          Submit
        </button>
      </form>

      <button name="button" onClick={handleLogout}>
        Logout
      </button>

      <p>Admin email : admin@gmail.com</p>
      <p>Admin password : admin123</p>
    </>
  );
}
