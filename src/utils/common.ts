import { Pair } from "../type";

export const isPair = <T>(value: any): value is Pair<T> => {
  return (
    value && typeof value === "object" && "first" in value && "second" in value
  );
};

export const processPairString = (data: string | Pair<string>): string => {
  return isPair(data) ? `${data.first} ${data.second}` : data;
};
