import { ApiBaseUrl } from "@/Services/Config";
import REQUEST from "@/Services/Request";

export default async function LOGIN(data) {
  return await REQUEST({
    method: "POST",
    url: ApiBaseUrl + `auth/login`,
    data,
    // withCredentials: true,
    // xhrFields: { withCredentials: true },
  }).catch((error) => console.log(error));
}

// import { ApiBaseUrl } from "@/Services/Config";
// import REQUEST from "@/Services/Request";

// export default async function LOGIN(data) {
//   await fetch(ApiBaseUrl + `login`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//     credentials: "include",
//   });
// }
