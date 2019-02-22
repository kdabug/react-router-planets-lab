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

const fetchRandomPlanet = async () => {
  try {
    const resp = await axios(`${BASE_URL}/planets/random`);
    return resp.data.planet;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const submitPlanet = async planet => {
  try {
    console.log(`this is planet:`, planet);
    const resp = await axios.post(`${BASE_URL}/planets/`, planet);
    return resp.data.planet;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

export { fetchPlanets, fetchRandomPlanet, submitPlanet };
