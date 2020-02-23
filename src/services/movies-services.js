import http from "./httpService";
import config from "../config/common-config.json";
const endPoint = config.endPoint + "/movies";

function movieUrl(id) {
  return `${endPoint}/${id}`;
}
export function getMovies() {
  return http.get(endPoint);
}
export function deleteMovies(movieId) {
  return http.delete(movieUrl(movieId));
}

export function getMovieById(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  console.log(endPoint);
  console.log(movie);
  return http.post(endPoint, movie);
}
