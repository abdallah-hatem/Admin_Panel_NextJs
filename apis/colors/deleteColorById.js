import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function DELETE_COLOR_BY_ID(id) {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `colors/${id}`,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
