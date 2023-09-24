import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function GET_COOKIE() {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `get-cookie`,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
