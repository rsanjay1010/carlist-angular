//Install express server
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const routes = require("./routes");
const app = express();

const CarService = require("./routes/services/CarService");

const carService = new CarService();

app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/carlist-angular"));

app.use(
  "/api",
  routes({
    carService,
  })
);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/carlist-angular/index.html"));
});

app.use((err, request, response, next) => {
  response.locals.message = err.message;
  const status = err.status || 500;
  response.locals.status = status;

  response.status(err.status || 500);
  response.json({
    message: err.message,
    error: err,
  });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4220);
