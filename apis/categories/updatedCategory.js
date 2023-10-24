import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function UPDATE_CATEGORY_BY_ID(data, id) {
  return await REQUEST({
    method: "PUT",
    url: ApiBaseUrl + `category/${id}`,
    data,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
