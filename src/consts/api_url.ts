export const BASE_URL = "http://localhost:3000/api";

export const api_url = {
  root: BASE_URL,
  user: {
    root: `${BASE_URL}/user`,
    me: {
      root: `${BASE_URL}/user/me`,
      update: `${BASE_URL}/user/me/update`,
    },
  },
  category: {
    root: `${BASE_URL}/category`,
    fetchCategories: `${BASE_URL}/category/fetchCategories`,
  },
  faq: {
    root: `${BASE_URL}/faq`,
    fetchFaqsByCategory: `${BASE_URL}/faq/fetchFaqsByCategory`,
  },
};
