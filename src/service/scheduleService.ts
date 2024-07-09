import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "../consts";
import { PackMembers, Schedule } from "../type";

export const scheduleApi = createApi({
  reducerPath: "scheduleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api_url.schedule.root,
    prepareHeaders: (headers) => {
      const token = localStorage.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      else localStorage.setItem("token", "");
    },
  }),
  endpoints: (builder) => ({
    fetchSchedule: builder.query<Schedule, string>({
      query: (id) => `/fetchSchedule?id=${id}`,
    }),
  }),
});

export const { useFetchScheduleQuery } = scheduleApi;
