import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function GET_USERS() {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `user`,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
