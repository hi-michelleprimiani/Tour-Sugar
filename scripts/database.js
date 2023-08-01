const database = {
  venues: [
    {
      id: 1,
      name: "The Bowery Electric",
      address: "327 Bowery",
      sqfoot: 1200,
      occupancy: 250,
    },
    {
      id: 2,
      name: "Whisky a Go Go",
      address: "8901 Sunset Blvd",
      sqfoot: 1500,
      occupancy: 250,
    },

    {
      id: 3,
      name: "The Troubadour",
      address: "9081 Santa Monica Blvd",
      sqfoot: 1200,
      occupancy: 180,
    },

    {
      id: 4,
      name: "The Fillmore",
      address: "1805 Geary Blvd",
      sqfoot: 1800,
      occupancy: 300,
    },

    {
      id: 5,
      name: "CBGB",
      address: "315 Bowery",
      sqfoot: 800,
      occupancy: 150,
    },

    {
      id: 6,
      name: "The 9:30 Club",
      address: "815 V St NW",
      sqfoot: 2000,
      occupancy: 350,
    },

    {
      id: 7,
      name: "First Avenue",
      address: "701 N 1st Ave",
      sqfoot: 1600,
      occupancy: 250,
    },

    {
      id: 8,
      name: "Exit/In",
      address: "2208 Elliston Pl",
      sqfoot: 1200,
      occupancy: 175,
    },

    {
      id: 9,
      name: "The Bowery Ballroom",
      address: "6 Delancey St",
      sqfoot: 1400,
      occupancy: 220,
    },

    {
      id: 10,
      name: "The Viper Room",
      address: "8852 Sunset Blvd",
      sqfoot: 900,
      occupancy: 180,
    },
  ],
  bands: [
    {
      id: 1,
      name: "Depeche Mode",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1980,
    },

    {
      id: 2,
      name: "The Cure",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1976,
    },

    {
      id: 3,
      name: "New Order",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1980,
    },

    {
      id: 4,
      name: "Talking Heads",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1975,
    },

    {
      id: 5,
      name: "The Smiths",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1982,
    },

    {
      id: 6,
      name: "Blondie",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1974,
    },

    {
      id: 7,
      name: "The Stooges",
      numOfMembers: 4,
      genre: "Punk Rock",
      yearFormed: 1967,
    },

    {
      id: 8,
      name: "Tears for Fears",
      numOfMembers: 2,
      genre: "New Wave",
      yearFormed: 1981,
    },

    {
      id: 9,
      name: "Buzzcocks",
      numOfMembers: 4,
      genre: "Punk Rock",
      yearFormed: 1976,
    },

    {
      id: 10,
      name: "Echo & The Bunnymen",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1978,
    },

    {
      id: 11,
      name: "The Human League",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1977,
    },

    {
      id: 12,
      name: "Joy Division",
      numOfMembers: 4,
      genre: "New Wave",
      yearFormed: 1976,
    },

    {
      id: 13,
      name: "The Velvet Underground",
      numOfMembers: 4,
      genre: "Rock",
      yearFormed: 1964,
    },

    {
      id: 14,
      name: "Orchestral Manoeuvres in the Dark (OMD)",
      numOfMembers: 3,
      genre: "New Wave",
      yearFormed: 1978,
    },

    {
      id: 15,
      name: "Patti Smith",
      numOfMembers: 5,
      genre: "Rock",
      yearFormed: 1974,
    },
  ],
  bookings: [
    {
      id: 1,
      bandName: 1,
      venueName: 5,
      dateOfBooking: 1982,
    },

    {
      id: 2,
      bandName: 2,
      venueName: 3,
      dateOfBooking: 1979,
    },

    {
      id: 3,
      bandName: 3,
      venueName: 9,
      dateOfBooking: 1983,
    },

    {
      id: 4,
      bandName: 4,
      venueName: 4,
      dateOfBooking: 1978,
    },

    {
      id: 5,
      bandName: 5,
      venueName: 1,
      dateOfBooking: 1984,
    },

    {
      id: 6,
      bandName: 6,
      venueName: 2,
      dateOfBooking: 1977,
    },

    {
      id: 7,
      bandName: 7,
      venueName: 8,
      dateOfBooking: 1969,
    },

    {
      id: 8,
      bandName: 8,
      venueName: 6,
      dateOfBooking: 1982,
    },

    {
      id: 9,
      bandName: 9,
      venueName: 7,
      dateOfBooking: 1978,
    },

    {
      id: 10,
      bandName: 10,
      venueName: 10,
      dateOfBooking: 1986,
    },

    {
      id: 11,
      bandName: 11,
      venueName: 1,
      dateOfBooking: 1980,
    },

    {
      id: 12,
      bandName: 12,
      venueName: 3,
      dateOfBooking: 1979,
    },

    {
      id: 13,
      bandName: 13,
      venueName: 4,
      dateOfBooking: 1967,
    },

    {
      id: 14,
      bandName: 14,
      venueName: 6,
      dateOfBooking: 1982,
    },

    {
      id: 15,
      bandName: 15,
      venueName: 5,
      dateOfBooking: 1975,
    },

    {
      id: 16,
      bandName: 1,
      venueName: 3,
      dateOfBooking: 1981,
    },

    {
      id: 17,
      bandName: 2,
      venueName: 4,
      dateOfBooking: 1979,
    },

    {
      id: 18,
      bandName: 3,
      venueName: 9,
      dateOfBooking: 1983,
    },

    {
      id: 19,
      bandName: 4,
      venueName: 2,
      dateOfBooking: 1978,
    },

    {
      id: 20,
      bandName: 5,
      venueName: 1,
      dateOfBooking: 1984,
    },
  ],
};

export const getVenues = () => {
  return database.venues.map((venue) => ({ ...venue }));
};

export const getBands = () => {
  return database.bands.map((band) => ({ ...band }));
};

export const getBookings = () => {
  return database.bookings.map((booking) => ({ ...booking }));
};
