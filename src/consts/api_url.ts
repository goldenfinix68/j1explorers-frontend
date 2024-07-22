export const BASE_URL = "http://localhost:5000/api";

export const api_url = {
  root: BASE_URL,
  user: {
    root: `${BASE_URL}/user`,
    me: {
      root: `${BASE_URL}/user/me`,
      update: `${BASE_URL}/user/me/update`,
    },
  },
  tour: {
    root: `${BASE_URL}/tour`,
    fetchPackMembers: `${BASE_URL}/fetchPackMembers`,
  },
  category: {
    root: `${BASE_URL}/category`,
    fetchCategories: `${BASE_URL}/category/fetchCategories`,
  },
  schedule: {
    root: `${BASE_URL}/schedule`,
    fetchSchedule: `${BASE_URL}/schdule/fetchSchedule`,
  },
  faq: {
    root: `${BASE_URL}/faq`,
    fetchFaqsByCategory: `${BASE_URL}/faq/fetchFaqsByCategory`,
  },
};
