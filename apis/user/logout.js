import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function LOGOUT() {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `logout`,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
