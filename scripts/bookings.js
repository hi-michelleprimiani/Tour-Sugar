import { CurrentBands } from "./bands.js";
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
          html += `<li 
          class="bookings_style"
          data-type="bookings" 
          data-id="${booking.id}"
          data-bandid="${booking.bandId}"
          >${band.name} are playing at ${venue.name} on ${booking.dateOfBooking}</li>`;
        }
      }
    }
  }
  html += "</ul>";
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const bandId = itemClicked.dataset.bandid;

  if (itemClicked.dataset.type === "bookings") {
    debugger;
    for (const band of bands) {
      if (parseInt(bandId) === band.id) {
        window.alert(
          `${band.name}\n${band.genre}\nFormed in ${band.yearFormed}\n${band.numOfMembers} band members`
        );
      }
    }
  }
});
