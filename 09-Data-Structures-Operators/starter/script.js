'use strict';

const league = {
  teams: {
    arsenal: 'Arsenal',
    city: 'Manchester City',
    liverpool: 'Liverpool',
  },

  matches: [
    {
      home: 'arsenal',
      away: 'city',
      score: '2:1',
      scorers: ['Saka', 'Haaland', 'Martinelli'],
    },

    {
      home: 'city',
      away: 'liverpool',
      score: '3:2',
      scorers: ['Haaland', 'Haaland', 'Salah', 'Foden', 'Nunez'],
    },
  ],
};

for (const [i, { home, away }] of league.matches.entries()) {
  console.log(`Match ${i + 1} : `);
  console.log(`${league.teams[home]} VS ${league.teams[away]}`);
}

let goalNumber = 1;
for (const [key, { scorers }] of league.matches.entries()) {
  console.log(`Match ${key + 1} : `);
  for (const name of scorers) {
    console.log(`Goal ${goalNumber} : ${name}`);
    goalNumber++;
  }
}

const goalScorer = {};
for (const { scorers } of league.matches) {
  for (const player of scorers) {
    if (goalScorer[player]) {
      goalScorer[player] += 1;
    } else {
      goalScorer[player] = 1;
    }
  }
}

console.log(goalScorer);
let totalGoals = 0;
for (const { scorers } of league.matches) {
  totalGoals += scorers.length;
}
console.log(totalGoals);

let topScorer = '';
let maxGoals = 0;

for (const [name, score] of Object.entries(goalScorer)) {
  console.log(name, score);
  if (score > maxGoals) {
    topScorer = name;
    maxGoals = score;
  }
}

console.log(`Top Scorer adalah ${topScorer} dengan ${maxGoals} Gol.`);
