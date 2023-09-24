import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function ADD_PRODUCT(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `products`,
    data,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
