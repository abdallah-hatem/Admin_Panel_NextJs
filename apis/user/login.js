import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function LOGIN(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `login`,
    data,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
