import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function DELETE_PRODUCT(id) {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `products/${id}`,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
