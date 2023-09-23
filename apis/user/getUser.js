import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function GET_USERS() {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `user`,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
