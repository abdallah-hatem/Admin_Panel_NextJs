export const ApiBaseUrl =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? "http://localhost:8000/"
    : "https://nest-js-ecommerce.vercel.app/";
