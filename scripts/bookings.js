import { getBands, getBookings, getVenues } from "./database.js";

const bookings = getBookings();
const bands = getBands();
const venues = getVenues();

export const CurrentBookings = () => {
  let html = "<ul>";

  for (const booking of bookings) {
    for (const band of bands) {
      for (const venue of venues) {
        if (booking.bandId === band.id && venue.id === booking.venueId) {
          html += `<li data-type="bookings" data-id="${booking.id}">${band.name} are playing at ${venue.name} on ${booking.dateOfBooking}</li>`;
        }
      }
    }
  }
  html += "</ul>";
  return html;
};
