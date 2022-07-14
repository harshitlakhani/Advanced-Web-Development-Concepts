const express = require("express");
const connectDB = require("./config/db");
const app = express();
var cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect Database
connectDB();

//Events
const eventRoute = require("./routes/eventRoute");
app.use("/events", eventRoute);

//EventsBooking
const eventBookingRoute = require("./routes/eventBookingRoute");
app.use("/events/booking", eventBookingRoute);

//Flights
const flightRoute = require("./routes/FlightRoute");
app.use("/flights", flightRoute);

//FlightBooking
// const flightBookingRoute = require("./routes/FlightBookingRoute");
// app.use("/flights/booking", flightBookingRoute);

const hotelListRoute = require("./routes/hotelRoute");
app.use("/hotels", hotelListRoute);




app.listen(process.env.PORT || 5001, () => {
	console.log("server started");
});
