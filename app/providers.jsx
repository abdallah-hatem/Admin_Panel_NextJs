"use client";

import Auth from "@/context/auth";

export function SideNavProvider({ children }) {
  return <Auth>{children}</Auth>;
}
