import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function GET_CATEGORIES() {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `category`,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
