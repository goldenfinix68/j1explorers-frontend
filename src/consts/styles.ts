import { Location } from "../type";

export const BUTTON_COLORS: Record<Location, string> = {
  la: "bg-primary border-darkgreen",
  vegas: "bg-darkyellow border-secondary",
  nyc: "bg-secondary border-darkyellow",
};

export const DIVIDER_COLORS: Record<Location, string> = {
  la: "border-primary",
  vegas: "border-darkyellow",
  nyc: "border-secondary",
};

export const TITLE_COLORS: Record<Location, string> = {
  la: "text-primary",
  vegas: "text-darkyellow",
  nyc: "text-secondary",
};

export const CONTENT_COLORS: Record<Location, string> = {
  la: "text-darkgreen",
  vegas: "text-secondary",
  nyc: "text-darkyellow",
};
