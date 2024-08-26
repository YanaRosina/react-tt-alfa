import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "../models/ICard";

export const cardAPI = createApi({
  reducerPath: "cardAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    fetchAllCards: build.query<ICard[], number>({
      query: () => ({
        url: "/products",
      }),
    }),
  }),
});
