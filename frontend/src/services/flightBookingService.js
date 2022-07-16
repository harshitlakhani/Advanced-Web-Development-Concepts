import http from "./httpService";

const getFlightBookingsAPI = "/flightbookings";
const createFlightBookingsAPI = "/flightbookings/add";
const updateFlightBookingsAPI = "/flightbookings/update";
const updateBookingStatusAPI = "/flightbookings/updateBookingStatus/";
const cancelFlightBookingAPIEndpoint = "flightbookings/cancel/"

export const getFlightBooking = async (userId) => {
	return http.get(`${getFlightBookingsAPI}/${userId}`);
};

export const createFlightBooking = async (bookingInfo) => {
	return http.post(`${createFlightBookingsAPI}`, bookingInfo);
};

export const updateFlightBooking = async (bookingInfo) => {
	return http.put(`${updateFlightBookingsAPI}`, bookingInfo);
};

export const updateBookingStatus = (body, id) => {
  return http.get(`${updateBookingStatusAPI}${id}`, body);
};

export const getFlightBookingByUserId = (userId) =>{
    return http.get(`${getFlightBookingsAPI}${userId}`)
}

export const cancelFlightBooking = (id) => {
    return http.get(`${cancelFlightBookingAPIEndpoint}${id}`)
}