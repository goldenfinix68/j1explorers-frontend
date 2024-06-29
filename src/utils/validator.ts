import { CITIES, CONTACT_TYPES } from "../consts";

export const isValidCity = (
  city: string | undefined
): city is keyof typeof CITIES => {
  return city !== undefined && city in CITIES;
};

export const isValidContact = (
  contact: string | undefined
): contact is keyof typeof CONTACT_TYPES => {
  return contact !== undefined && contact in CONTACT_TYPES;
};
