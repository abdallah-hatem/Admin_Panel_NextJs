import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function DELETE_SIZE_BY_ID(id) {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `sizes/${id}`,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
