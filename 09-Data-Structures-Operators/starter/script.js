'use strict';

'use strict';

const company = {
  name: 'TechNova',

  employees: [
    {
      name: 'Delano',
      department: 'Engineering',
      tasksCompleted: 18,
    },
    {
      name: 'Rangga',
      department: 'Design',
      tasksCompleted: 12,
    },
    {
      name: 'Fadhil',
      department: 'Engineering',
      tasksCompleted: 20,
    },
    {
      name: 'Alya',
      department: 'Marketing',
      tasksCompleted: 15,
    },
  ],

  performance: {
    Engineering: 9.2,
    Design: 8.4,
    Marketing: 7.8,
  },
};

for (const [i, { name }] of Object.entries(company.employees)) {
  console.log(`Employee ${Number(i) + 1} : ${name}`);
}

let totalTaskCompleted = 0;
for (const [i, { tasksCompleted }] of Object.entries(company.employees)) {
  totalTaskCompleted += tasksCompleted;
}
console.log(totalTaskCompleted);

let totalPerformace = 0;
for (const performance of Object.values(company.performance)) {
  totalPerformace += performance;
}
totalPerformace = totalPerformace / Object.keys(company.performance).length;
console.log(totalPerformace);

for (const [division, score] of Object.entries(company.performance))
  console.log(`Performance of ${division} : ${score}`);

const departmentCount = {};

for (const { department } of company.employees) {
  if (departmentCount[department]) {
    departmentCount[department]++;
  } else {
    departmentCount[department] = 1;
  }
}
console.log(departmentCount);
