import Cookies from "js-cookie";

export default function isAuth() {
  return !(Cookies.get("jwt") === undefined);
}
