import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function GET_PRODUCT_BY_ID(id) {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `products/${id}`,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
