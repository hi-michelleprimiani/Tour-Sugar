import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

export const CurrentVenues = () => {
  let html = "";
  html = "<ul>";

  for (const venue of venues) {
    html += `<li data-type="venue" data-name="${venue.name}" data-id="${venue.id}">${venue.name}</li>`;
  }

  html += "</ul>";
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let bookedBands = [];
  const venueName = itemClicked.dataset.id;

  if (itemClicked.dataset.type === "venue") {
    for (const booking of bookings) {
      if (booking.venueId === parseInt(venueName)) {
        for (const band of bands) {
          if (band.id === booking.bandId) {
            bookedBands.push(band.name);
          }
        }
      }
    }
    window.alert(`This venue has booked ${bookedBands}`);
  }
});

// displays all of the bands that have booked the venue.
