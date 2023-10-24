"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import isAuth from "@/utils/auth";

export default function isAuthenticated(Component) {
  return function IsAuth(props) {
    const auth = isAuth();

    useEffect(() => {
      if (!auth) {
        return redirect("/login");
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
