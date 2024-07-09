import { RecordDetail, TourResponse } from "../../type";
import { formatDate } from "../../utils/processDate";

export const getBookDate = (data: TourResponse): string => {
  return formatDate(data?.book, ["day", "month", "year"], "long");
};

export const getAdditionTourDate = (data: TourResponse): string => {
  return formatDate(data?.addition_tour_date, ["day", "month", "year"], "long");
};

export const getAdditionTourBookDate = (data: TourResponse): string => {
  return formatDate(data?.addition_tour_book, ["day", "month", "year"], "long");
};

export const getAdditionDaysDate = (data: TourResponse): string => {
  return formatDate(data?.addition_days_book, ["day", "month", "year"], "long");
};

export const getAdditionDaysBookDate = (data: TourResponse): string => {
  return formatDate(data?.addition_days_book, ["day", "month", "year"], "long");
};

export const getPackMembes = (data: TourResponse): number => {
  const keys = ["userId1", "userId2", "userId3", "userId4"];

  return keys.reduce((prev, val) => (data[val] ? prev + 1 : prev), 0);
};

export const getTotalPrice = (data: TourResponse): number => {
  const keys = [
    "main_tour_price",
    "addition_tour_price",
    "addition_days_price",
  ];

  return keys.reduce((prev, val) => prev + Number(data[val]), 0);
};

export const getTourStartDetail = (data: TourResponse): RecordDetail => {
  return {
    title: "Tour start",
    description: data.type ? "Los Angeles" : "New York City",
    description_style: data.type ? "text-primary" : "text-secondary",
  };
};

export const getTourEndDetail = (data: TourResponse): RecordDetail => {
  return {
    title: "Tour end",
    description: !data.type ? "Los Angeles" : "New York City",
    description_style: !data.type ? "text-primary" : "text-secondary",
  };
};

export const getMainTourPrice = (data: TourResponse): number => {
  return data.main_tour_price;
};
