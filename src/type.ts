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
  location: Location | Pair<Location>;
  title: ScheduleTitle | Pair<ScheduleTitle>;
  content: string;
  image?: string;
}

export interface DaySchedule {
  title: ScheduleTitle;
  details: ScheduleDetail[];
  location: Location;
}

export interface DayScheduleParams extends Record<string, string> {
  day_index: string;
}

export interface ScheduleDetailParams extends Record<string, string> {
  day_index: string;
  schedule_index: string;
}

export interface CityContactParams extends Record<string, string> {
  city: string;
  contact_type: string;
}

export interface Category extends Record<string, any> {
  id: number;
  title: string;
}

export interface CategoriesResponse extends Record<string, any> {
  categories: Category[];
}

export interface Faq extends Record<string, any> {
  id: number;
  question: string;
  answer: string;
}

export interface FaqsResponse extends Record<string, any> {
  faqs: Faq[];
}

export interface UserResponse extends Record<string, string | Date> {
  id: string;
  fullname: string;
  email: string;
  gender: string;
  birthdate: Date;
  phone: string;
  whatsapp: string;
  employer: string;
  passport_country: string;
  birthcity: string;
  passport_number: string;
  expiration_date: Date;
}

export interface UserDetail extends Record<string, string | Date | undefined> {
  fullname?: string;
  email?: string;
  gender?: string;
  birthdate?: Date;
  phone?: string;
  whatsapp?: string;
  employer?: string;
  passport_country?: string;
  birthcity?: string;
  passport_number?: string;
  expiration_date?: Date;
}

export type DateKey = "year" | "month" | "day";
