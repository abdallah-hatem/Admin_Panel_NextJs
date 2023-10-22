import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function UPDATE_PRODUCT_AND_STC(data, id) {
  return await REQUEST({
    method: "PUT",
    url: ApiBaseUrl + `products/${id}`,
    data,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
