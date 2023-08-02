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
      name: "OMD",
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
      bandId: 1,
      venueId: 5,
      dateOfBooking: "12/21/1982",
    },

    {
      id: 2,
      bandId: 2,
      venueId: 3,
      dateOfBooking: "6/22/1979",
    },

    {
      id: 3,
      bandId: 3,
      venueId: 9,
      dateOfBooking: "5/5/1983",
    },

    {
      id: 4,
      bandId: 4,
      venueId: 4,
      dateOfBooking: "7/8/1978",
    },

    {
      id: 5,
      bandId: 5,
      venueId: 1,
      dateOfBooking: "8/4/1984",
    },

    {
      id: 6,
      bandId: 6,
      venueId: 2,
      dateOfBooking: "1/22/1977",
    },

    {
      id: 7,
      bandId: 7,
      venueId: 8,
      dateOfBooking: "5/6/1969",
    },

    {
      id: 8,
      bandId: 8,
      venueId: 6,
      dateOfBooking: "2/22/1982",
    },

    {
      id: 9,
      bandId: 9,
      venueId: 7,
      dateOfBooking: "10/271978",
    },

    {
      id: 10,
      bandId: 10,
      venueId: 10,
      dateOfBooking: "10/31/1986",
    },

    {
      id: 11,
      bandId: 11,
      venueId: 1,
      dateOfBooking: "5/6/1980",
    },

    {
      id: 12,
      bandId: 12,
      venueId: 3,
      dateOfBooking: "4/5/1979",
    },

    {
      id: 13,
      bandId: 13,
      venueId: 4,
      dateOfBooking: "3/20/1967",
    },

    {
      id: 14,
      bandId: 14,
      venueId: 6,
      dateOfBooking: "9/12/1982",
    },

    {
      id: 15,
      bandId: 15,
      venueId: 5,
      dateOfBooking: "1/1/1975",
    },

    {
      id: 16,
      bandId: 1,
      venueId: 3,
      dateOfBooking: "4/4/1981",
    },

    {
      id: 17,
      bandId: 2,
      venueId: 4,
      dateOfBooking: "6/7/1979",
    },

    {
      id: 18,
      bandId: 3,
      venueId: 9,
      dateOfBooking: "3/3/1983",
    },

    {
      id: 19,
      bandId: 4,
      venueId: 2,
      dateOfBooking: "11/11/1978",
    },

    {
      id: 20,
      bandId: 5,
      venueId: 1,
      dateOfBooking: "2/2/1984",
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
