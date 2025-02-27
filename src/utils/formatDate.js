import { format } from "date-fns";

export const formatDate = (date) => {
  let pubDate = new Date(date);
  pubDate = format(pubDate, "dd MMMM yyyy, HH:mm");
  return pubDate;
};