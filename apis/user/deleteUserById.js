import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function DELETE_USER_BY_ID(id) {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `user/${id}`,
    token: getCookie("jwt"),
  }).catch((error) => console.log(error));
}
