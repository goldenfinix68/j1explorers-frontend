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

export interface Credentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: UserResponse;
}

export interface PasswordUpdate {
  old_password: string;
  new_password: string;
}

export interface UserEssential extends Record<string, string> {
  id: string;
  username: string;
  fullname: string;
  email: string;
}

export interface UserResponse extends Record<string, string | Date> {
  id: string;
  username: string;
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
  username?: string;
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

export interface TourResponse
  extends Record<string, string | Date | number | Boolean | UserEssential> {
  id: number;
  book: Date;
  main_tour_price: number;
  type: Boolean;
  addition_tour_name: string;
  addition_tour_date: Date;
  addition_tour_book: Date;
  addition_tour_price: number;
  addition_days_type: number;
  addition_days_book: Date;
  addition_days_price: number;
  paid: number;
  userId1: string;
  userId2: string;
  userId3: string;
  userId4: string;
}

export interface PackMembers extends Record<string, UserEssential | null> {
  user1: UserEssential | null;
  user2: UserEssential | null;
  user3: UserEssential | null;
  user4: UserEssential | null;
}

export interface Schedule extends Record<string, string | number> {
  id: number;
  title: string;
  from: number;
  to: number;
  content: string;
  type: string;
  day: number;
  image: string;
  time: string;
}

export type SchedulesResponse = Schedule[];

export interface APIResult {
  result: string;
}
