export const processString = (obj: any) => {
  if (obj === undefined) return "undefined";
  if (obj === null) return "null";
  return obj.toString();
};
