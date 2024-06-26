import { AppDetail } from "../type";

export const CITIES: Record<string, string> = {
  la: "LA",
  vegas: "Vegas",
  nyc: "NYC",
};

export const CITY_CONTACTS: Record<string, string[]> = {
  la: ["hotel", "fly-away", "hop-on-off", "coordinator"],
  vegas: [
    "airport",
    "hotel",
    "hop-on-off",
    "grand-canyon-hoover-dam",
    "coordinator",
  ],
  nyc: ["hotel", "airtrain", "trains", "hop-on-off", "coordinator"],
};

export const CONTACT_TYPES: Record<string, string> = {
  hotel: "hotel",
  "fly-away": "FlyAway",
  "hop-on-off": "hop-on/off",
  coordinator: "J1E coordinators",
  airtrain: "Airtrain",
  trains: "trains",
  airport: "airport shuttle",
  "grand-canyon-hoover-dam": "Grand Canyon/Hoover Dam",
};

export const APP_TYPES: Record<string, AppDetail> = {
  "big-bus": {
    title: "Big Bus Tours",
    content:
      "See available bus stops, site descriptions, and real-time bus locations.",
  },
  "app-in-the-air": {
    title: "App in the Air",
    content:
      "Extremely useful for flight information, flight update notifications, and airport navigation.",
  },
};
