export type Direction = 1 | -1;

export interface RecordDetail {
  title: string;
  description: any;
  title_style?: string;
  description_style?: string;
  gap?: string;
  className?: string;
}

export interface CityParams extends Record<string, string> {
  city: string;
}

export interface AppDetailParams extends Record<string, string> {
  apps: string;
}

export interface AppDetail {
  title: string;
  content: string;
}

export interface Pair<T> {
  first: T;
  second: T;
}

export type ScheduleTime = string | Pair<string> | undefined;

export type Location = "la" | "vegas" | "nyc";

export type ScheduleLocation = Location | Pair<Location>;

export type ScheduleTitle = string | Pair<string>;

export interface ScheduleDetail {
  time?: ScheduleTime;
  location: ScheduleLocation;
  title: ScheduleTitle | Pair<ScheduleTitle>;
  content: string;
  image?: string;
}

export interface DaySchedule {
  title: ScheduleTitle;
  details: ScheduleDetail[];
  location: Location;
}
