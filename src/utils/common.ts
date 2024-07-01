import { Pair } from "../type";

export const isPair = <T>(value: any): value is Pair<T> => {
  return (
    value && typeof value === "object" && "first" in value && "second" in value
  );
};

export const processPairString = (data: string | Pair<string>): string => {
  return isPair<string>(data) ? `${data.first} ${data.second}` : data;
};

export const getArrayFromPair = <T>(data: T | Pair<T>) => {
  return isPair<T>(data) ? [data.first, data.second] : [data];
};

export const getFirstOfPair = <T>(data: T | Pair<T>): T => {
  return isPair<T>(data) ? data.first : data;
};

export const getSecondOfPair = <T>(data: T | Pair<T>): T => {
  return isPair<T>(data) ? data.second : data;
};
