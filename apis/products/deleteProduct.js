import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function DELETE_PRODUCT(id) {
  return await REQUEST({
    method: "DELETE",
    url: ApiBaseUrl + `product/${id}`,
    withCredentials: true,
    xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}
