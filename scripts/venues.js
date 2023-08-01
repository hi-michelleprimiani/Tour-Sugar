import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

export const CurrentVenues = () => {
  let html = "";
  html = "<ul>";

  for (const venue of venues) {
    html += `<li>${venue.name}</li>`;
  }

  html += "</ul>";
  return html;
};
