import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function ADD_COLOR(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `colors`,
    data,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
