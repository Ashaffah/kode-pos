import app from "../configs/fastify";
import {
  getAllProvinces,
  getAllCities,
  getAllDistricts,
  getAllSubDistricts,
  getCodePos,
} from "../controllers/geoController";

const v1ApiRoutes = () => {
  app.register(
    function (api, opts, done): void {
      api.get("/provinces", getAllProvinces);
      api.get("/cities/:id", getAllCities);
      api.get("/districts/:id", getAllDistricts);
      api.get("/subdistrics/:id", getAllSubDistricts);
      api.get("/pivot/:id", getCodePos);

      done();
    },
    {
      prefix: "/api/v1/:apikey",
    }
  );
};

export default v1ApiRoutes;
