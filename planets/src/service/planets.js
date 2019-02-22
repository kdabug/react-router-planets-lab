import axios from "axios";
const BASE_URL = "https://wdi-nyc-planets-api.herokuapp.com/";

const fetchPlanets = async () => {
  try {
    const resp = await axios(`${BASE_URL}/planets/`);
    return resp.data.planets;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

export default fetchPlanets;
