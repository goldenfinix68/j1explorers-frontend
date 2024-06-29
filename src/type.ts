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
