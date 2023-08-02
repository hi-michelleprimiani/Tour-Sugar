import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands();
const venues = getVenues();
const bookings = getBookings();

export const CurrentBands = () => {
  let html = "<ul>";

  for (const band of bands) {
    html += `<li
    data-type="bands" 
    data-id="${band.id}" 
    data-name="${band.name}" 
    data-members="${band.numOfMembers}"
    data-genre="${band.genre}"
    data-year="${band.yearFormed}"
    >${band.name}</li>`;
  }

  html += "</ul>";
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  let venuesPlayed = [];
  const bandId = itemClicked.dataset.id;

  if (itemClicked.dataset.type === "bands") {
    for (const booking of bookings) {
      if (parseInt(bandId) === booking.bandId)
        for (const venue of venues) {
          if (booking.venueId === venue.id) {
            venuesPlayed.push(venue.name);
          }
        }
    }
    window.alert(`${itemClicked.dataset.name} is playing at ${venuesPlayed} `);
  }
});

// displays all of the venue at which the band is playing.
