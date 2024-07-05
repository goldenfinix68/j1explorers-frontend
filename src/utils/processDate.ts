import { DateKey } from "../type";

const months = [
  { short: "Jan", long: "January" },
  { short: "Feb", long: "February" },
  { short: "Mar", long: "March" },
  { short: "Apr", long: "April" },
  { short: "May", long: "May" },
  { short: "Jun", long: "June" },
  { short: "Jul", long: "July" },
  { short: "Aug", long: "August" },
  { short: "Sep", long: "September" },
  { short: "Oct", long: "October" },
  { short: "Nov", long: "November" },
  { short: "Dec", long: "December" },
];

const getValue = (date: Date, key: DateKey) => {
  return key === "year"
    ? date.getFullYear()
    : key === "month"
    ? date.getMonth()
    : date.getDate();
};

const getISODateParts = (date: Date) => {
  const isoString = date.toISOString();
  const year = Number(isoString.slice(0, 4));
  const month = Number(isoString.slice(5, 7));
  const day = Number(isoString.slice(8, 10));
  return { year, month, day };
};

export const formatDate = (
  date: string | Date,
  keys: DateKey[],
  type: "short" | "long"
): string => {
  const isoDate = getISODateParts(new Date(date));
  const res = keys.map((key) => {
    const val = isoDate[key];
    return key === "month" ? months[val - 1][type] : val.toString();
  });
  return res.join(" ");
};

export const formatDateToYYYYMMDD = (date: Date): string => {
  return date.toISOString().slice(0, 10);
};

export const toLocalDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const removeSuffix = (dateStr: string): string => {
  return dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
};
