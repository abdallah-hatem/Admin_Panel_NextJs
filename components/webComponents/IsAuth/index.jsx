"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAuthContext } from "@/context/auth";

export default function isAuthenticated(Component) {
  return function IsAuth(props) {
    const { isAuth } = useAuthContext();

    useEffect(() => {
      if (!isAuth) {
        return redirect("/login");
      }
    }, []);

    if (!isAuth) {
      return null;
    }

    return <Component {...props} />;
  };
}
