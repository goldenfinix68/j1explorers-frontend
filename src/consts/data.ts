import { AppDetail, Location } from "../type";

export const CITIES: Record<string, string> = {
  la: "LA",
  vegas: "Vegas",
  nyc: "NYC",
};

export const cities: Location[] = ["la", "vegas", "nyc"];

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
  uber: {
    title: "Uber",
    content:
      "A convenient way for personalized travel and unexpected situations - for instance, if you are lost or you missed the last bus.",
  },
  "google-map": {
    title: "Google Maps",
    content:
      "We will share a map with you of key locations including transportation and accommodations. Location sharing can also be useful for finding friends.",
  },
  whatsapp: {
    title: "WhatsApp",
    content: "The easiest way to contact J1 Explorers.",
  },
};
