import { APP_TYPES, CITIES, CONTACT_TYPES } from "../consts";
import { schedules } from "../consts/schedules_data";
import { Location } from "../type";

export const isValidCity = (city: string | undefined): city is Location => {
  return city === "la" || city === "vegas" || city === "nyc";
};

export const isValidContact = (
  contact: string | undefined
): contact is keyof typeof CONTACT_TYPES => {
  return contact !== undefined && contact in CONTACT_TYPES;
};

export const isValidApps = (
  apps: string | undefined
): apps is keyof typeof APP_TYPES => {
  return apps !== undefined && apps in APP_TYPES;
};

export const isValidDayScheduleIndex = (index: string | undefined): boolean => {
  return Number(index) >= 0 && Number(index) < schedules.length;
};
