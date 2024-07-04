import axios, { AxiosRequestConfig } from "axios";

export async function sendRequest<T>(
  url: string,
  method: "GET" | "POST" | "UPDATE" | "DELETE",
  params?: Record<string, any>,
  body?: Object,
  token?: string
): Promise<T> {
  const config: AxiosRequestConfig = {
    method,
    url,
    params,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    data: body,
  };
  return axios
    .request(config)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

export async function sendGetRequest<T>(
  url: string,
  params?: Record<string, any>,
  token?: string
): Promise<T> {
  try {
    const data: T = await sendRequest(url, "GET", params, undefined, token);
    return data;
  } catch (err) {
    throw new Error("Error Occured");
  }
}

export async function sendPostRequest<T>(
  url: string,
  body?: Object,
  token?: string
): Promise<T> {
  try {
    const data: T = await sendRequest(url, "POST", undefined, body, token);
    return data;
  } catch (err) {
    throw new Error("Error Occured");
  }
}
