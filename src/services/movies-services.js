const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    title: "M",
    genere: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd472819",
    title: "O",
    genere: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    title: "N",
    genere: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "D",
    genere: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "K",
    genere: { _id: "5b21ca3eeb7f6fbccd471819", name: "Comedy" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    title: "F",
    genere: { _id: "5b21ca3eeb7f6fbccd471819", name: "Comedy" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    title: "G",
    genere: { _id: "5b21ca3eeb7f6fbccd471819", name: "Comedy" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    title: "H",
    genere: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471826",
    title: "Y",
    genere: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStocks: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809z",
    liked: false
  }
];

export function getMovies() {
  return movies;
}
