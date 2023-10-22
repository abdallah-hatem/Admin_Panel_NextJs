import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function ADD_SIZE(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `sizes`,
    data,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
