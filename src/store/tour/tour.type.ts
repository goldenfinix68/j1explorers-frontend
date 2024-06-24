export interface Period {
  from: Date;
  to: Date;
}
export interface Route {
  from: string;
  to: string;
}
export interface Tour {
  period: Period;
  route: Route;
}
