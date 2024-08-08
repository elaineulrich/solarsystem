import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  const { totalTemp, count } = data.planets.reduce((acc, planet) => {
    if (planet.avgTemp != null) { 
      acc.totalTemp += planet.avgTemp;
      acc.count += 1;
    }
    return acc;
  }, { totalTemp: 0, count: 0 });

  return count > 0 ? (totalTemp / count) : 0;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
