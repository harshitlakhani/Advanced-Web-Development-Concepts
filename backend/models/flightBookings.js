const mongoose = require("mongoose");

const FlightBookingSchema = new mongoose.Schema({
    flightCompany: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    flightDate: {
        type: String,
        required: true,
    },
    stops: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    noOfTravelers: {
        type: Number,
        required: true,
    },
    travelerDetails: {
        type: Object,
        required: true
    }
});

module.exports = FlightBookings = mongoose.model("flightbookings", FlightBookingSchema);
