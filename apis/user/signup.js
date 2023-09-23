import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function SIGNUP(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `signup`,
    data,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
