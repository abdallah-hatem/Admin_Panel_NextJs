import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function UPDATE_USER_BY_ID(data, id) {
  return await REQUEST({
    method: "PUT",
    url: ApiBaseUrl + `user/${id}`,
    data,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
