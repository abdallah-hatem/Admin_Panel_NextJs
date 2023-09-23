import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function ADD_CATEGORY(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `categories`,
    data,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
