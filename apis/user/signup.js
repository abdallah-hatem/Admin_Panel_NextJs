import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import Cookies from "js-cookie";

export default async function SIGNUP(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `auth/signup`,
    data,
    token: Cookies.get("jwt"),
  }).catch((error) => console.log(error));
}
