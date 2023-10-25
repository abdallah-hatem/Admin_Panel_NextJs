"use client";
import Cookies from "js-cookie";
import "./style.scss";

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/auth";

export default function NavBarComp() {
  const { push } = useRouter();
  const { isAuth, setIsAuth } = useAuthContext();

  return (
    <nav className="navbar">
      <p>Navbar</p>
      <button
        disabled={!isAuth}
        onClick={() => {
          Cookies.remove("jwt", { path: "/" });
          push("/login");
          setIsAuth(false);
        }}
      >
        Logout
      </button>
    </nav>
  );
}
