import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "../consts";
import {
  LoginResponse,
  UserDetail,
  UserResponse,
  Credentials,
  PasswordUpdate,
  APIResult,
  Fingerprint,
} from "../type";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api_url.user.root,
    prepareHeaders: (headers) => {
      const token = localStorage.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      else localStorage.setItem("token", "");
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Credentials>({
      query: (credential) => ({
        url: "/login",
        method: "POST",
        body: credential,
      }),
    }),
    loginByFingerprint: builder.mutation<LoginResponse, Fingerprint>({
      query: (fingerprint) => ({
        url: "/fingerprint/login",
        method: "POST",
        body: fingerprint,
      }),
    }),
    fetchMe: builder.query<UserResponse, void>({
      query: () => `/me`,
    }),
    isAllowedBiometrics: builder.query<APIResult, void>({
      query: () => `/me/fingerprint`,
    }),
    updateProfile: builder.mutation<UserResponse, UserDetail>({
      query: (profile) => ({
        url: `/me/update`,
        method: `PUT`,
        body: profile,
      }),
    }),
    updateFingerprint: builder.mutation<APIResult, Fingerprint>({
      query: (fingerprint) => ({
        url: `/me/fingerprint/update`,
        method: `PUT`,
        body: fingerprint,
      }),
    }),
    changePassword: builder.mutation<APIResult, PasswordUpdate>({
      query: (passwordUpdate) => ({
        url: `/me/changePassword`,
        method: `PUT`,
        body: passwordUpdate,
      }),
    }),
  }),
});

export const {
  useFetchMeQuery,
  useIsAllowedBiometricsQuery,
  useUpdateProfileMutation,
  useLoginMutation,
  useLoginByFingerprintMutation,
  useChangePasswordMutation,
  useUpdateFingerprintMutation,
} = userApi;
