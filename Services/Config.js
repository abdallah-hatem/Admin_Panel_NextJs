export const ApiBaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/"
    : "https://nest-js-ecommerce.vercel.app/";
