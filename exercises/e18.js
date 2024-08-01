/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from './e17'; 

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids || [];

  const yearCounts = {};

  for (const asteroid of asteroids) {
    const year = asteroid.discoveryYear;
    if (year) {
      if (!yearCounts[year]) {
        yearCounts[year] = 0;
      }
      yearCounts[year]++;
    }
  }

  const yearCountArray = Object.entries(yearCounts).map(([year, count]) => ({
    year: parseInt(year, 10),
    count
  }));

  const maxDiscoveryYear = maxBy(yearCountArray, item => item.count);

  return maxDiscoveryYear ? maxDiscoveryYear.year : undefined;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
