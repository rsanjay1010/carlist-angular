const express = require("express");

const router = express.Router();

module.exports = (params) => {
  const { carService } = params;

  router.get("/getCarDetails/:id", async (request, response, next) => {
    try {
      const carDetail = await carService.getCarDetails(request.params.id);

      return response.json(carDetail);
    } catch (err) {
      return next(err);
    }
  });

  router.get(
    "/getListByQuarter/:year/:quarter",
    async (request, response, next) => {
      try {
        const carlists = await carService.getListByQuarter(
          request.params.year,
          request.params.quarter
        );

        return response.json(carlists);
      } catch (err) {
        return next(err);
      }
    }
  );

  return router;
};
