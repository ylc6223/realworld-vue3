import http from "@/utils/http.js";

export const eventList = function () {
  return http.request({
    url: "https://my-json-server.typicode.com/ylc6223/mock-data/events",
    method: "GET",
  });
};

export const eventDetails = function (id) {
  return http.request({
    // url: "/events",
    url: `https://my-json-server.typicode.com/ylc6223/mock-data/events/${id}`,
    method: "GET",
  });
};
