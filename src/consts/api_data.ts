import { DaySchedule } from "../type";

export const schedules: DaySchedule[] = [
  { title: "Optional Additional Day", location: "la", details: [] },
  {
    title: { first: "September 3rd", second: "September 3" },
    location: "la",
    details: [
      {
        time: { first: "2pm", second: "(or after)" },
        location: "la",
        title: "Hotel check-in",
        content: "",
      },
    ],
  },
  {
    title: { first: "September 4th", second: "September 4" },
    location: "la",
    details: [
      {
        time: { first: "8:30am -", second: "4:30pm" },
        location: { first: "la", second: "vegas" },
        title: "Big Bus Tours",
        content:
          "You have access to the hop-on/off Big Bus Tours routes all day during their operating hours from 8:30am to 4:30pm. Just scan your QR code whenever you board the bus.",
        image: "/assets/images/qrcode-1.png",
      },
    ],
  },
  {
    title: { first: "September 5th", second: "September 5" },
    location: "vegas",
    details: [],
  },
  {
    title: { first: "September 6th", second: "September 6" },
    location: "vegas",
    details: [],
  },
  {
    title: { first: "September 7th", second: "September 7" },
    location: "nyc",
    details: [
      {
        time: { first: "8am", second: "(or earlier)" },
        location: "vegas",
        title: { first: "Hotel checkout", second: "Nice New Hotel" },
        content:
          "Go to the front desk and check-out of your room. You technically have until 11am to check-out, however you need to leave enough time to get to the airport and catch your flight.",
      },
      {
        time: "8:30am",
        location: "vegas",
        title: "Shuttle to airport",
        content:
          "You should check with the front desk the night before to arrange a shuttle time based on your flight departure time. You should allow at least 30 minutes shuttle time and should be at the airport a minimum of 2 hours prior to the flight departure time.",
      },
      {
        time: "11:05am",
        location: { first: "vegas", second: "nyc" },
        title: {
          first: "Flight LV to NYC",
          second: { first: "Flight from Vegas to", second: "NYC" },
        },
        content:
          "You should check with the front desk the night before to arrange a shuttle time based on your flight departure time. You should allow at least 30 minutes shuttle time and should be at the airport a minimum of 2 hours prior to the flight departure time.",
      },
      {
        location: "nyc",
        title: "Train to hotel",
        content:
          "You should check with the front desk the night before to arrange a shuttle time based on your flight departure time. You should allow at least 30 minutes shuttle time and should be at the airport a minimum of 2 hours prior to the flight departure time.",
      },
      {
        location: "nyc",
        title: "Hotel check-in",
        content:
          "You should check with the front desk the night before to arrange a shuttle time based on your flight departure time. You should allow at least 30 minutes shuttle time and should be at the airport a minimum of 2 hours prior to the flight departure time.",
      },
      {
        location: "nyc",
        time: { first: "7pm -", second: "9pm" },
        title: "Night bus (optional)",
        content:
          "The city night bus tour is included, however it requires signing up in advance. If it is something you want to participate in, you need to specify the date that you want to go no later than 2pm on the date of the tour.",
      },
    ],
  },
  {
    title: { first: "September 8th", second: "September 8" },
    location: "nyc",
    details: [],
  },
  {
    title: { first: "September 9th", second: "September 9" },
    location: "nyc",
    details: [],
  },
  { title: "Optional Additional Day", location: "nyc", details: [] },
];
