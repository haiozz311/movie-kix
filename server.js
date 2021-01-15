const express = require("express");
const app = express();
const config = require("./config/index");
const mongoose = require("mongoose");
const movieController = require("./controllers/Movie.controller");
const userController = require("./controllers/User.controller");
const theatreCotroller = require("./controllers/Theatre.controller");
const scheduleController = require("./controllers/Schedule.controller");
const systemCinemaController = require("./controllers/SystemCinema.controller");
const cinemaController = require("./controllers/Cinema.controller");
const ticketRoomController = require("./controllers/TicketRoom.controller");
const ticketController = require("./controllers/ticket.controller");
app.use(express.json());

app.use("/api", movieController);
// app.use("/api", cinemaController);
app.use("/api", userController);
app.use("/api", theatreCotroller);
app.use("/api", scheduleController);
app.use("/api", systemCinemaController);
app.use("/api", cinemaController);
app.use("/api", ticketRoomController);
app.use("/api", ticketController);
app.get("/", (req, res) => [res.send("well come kix")]);

app.use("/img", express.static("img"));

console.log("config", config.MONGO_URI);
mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to database successfully");
  })
  .catch(console.log);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
