import { RootState } from "..";

export const tourSelector = (state: RootState) => state.tour;
export const periodSelector = (state: RootState) => state.tour.period;
export const routeSelector = (state: RootState) => state.tour.route;
