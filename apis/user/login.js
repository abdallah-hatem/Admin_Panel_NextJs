import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";
import { getCookie } from "cookies-next";

export default async function LOGIN(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `auth/login`,
    data,
  }).catch((error) => console.log(error));
}
