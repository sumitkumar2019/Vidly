import http from "./httpService";
import config from "../config/common-config.json";
export function getGenre() {
  return http.get(config.endPoint + "/genres");
}
