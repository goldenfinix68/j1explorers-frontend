import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "../consts";
import { PackMembers, SchedulesResponse, TourResponse } from "../type";

export const tourApi = createApi({
  reducerPath: "tourApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api_url.tour.root,
    prepareHeaders: (headers) => {
      const token = localStorage.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      else localStorage.setItem("token", "");
    },
  }),
  endpoints: (builder) => ({
    fetchPackMembers: builder.query<PackMembers, void>({
      query: () => `/fetchPackMembers`,
    }),
    fetchTour: builder.query<TourResponse, void>({
      query: () => `/fetchTourByUserId`,
    }),
    fetchTourWithSchedules: builder.query<SchedulesResponse, string>({
      query: (day) => `/fetchTourWithSchedules?day=${day}`,
    }),
  }),
});

export const {
  useFetchPackMembersQuery,
  useFetchTourQuery,
  useFetchTourWithSchedulesQuery,
} = tourApi;
