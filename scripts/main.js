import { CurrentBands } from "./bands.js";
import { CurrentBookings } from "./bookings.js";
import { CurrentVenues } from "./venues.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Sam's Tour Promotion </h1>
<article class="gigs_flex"
            <section class="details__bookings">
                 <h2>Bookings</h2>
                ${CurrentBookings()}
            </section>
</article>
<article class="bandsvenues_flex">
            <section class="details_venues">
                <h2>Venues</h2>
                ${CurrentVenues()}
            </section>
            <section class="details_bands">
                <h2>Bands</h2>
                ${CurrentBands()}
            </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
