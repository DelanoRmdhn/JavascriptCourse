'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

const schedule = {
  [weekdays[0]]: {
    topic: 'Arrays',
    hours: 2,
  },

  [weekdays[1]]: {
    topic: 'Objects',
    hours: 3,
  },

  [weekdays[2]]: {
    topic: 'Destructuring',
    hours: 2,
  },

  [weekdays[3]]: {
    topic: 'Spread',
    hours: 2,
  },

  [weekdays[4]]: {
    topic: 'Rest',
    hours: 1,
  },
};

const student = {
  name: 'Delano',

  completedTopics: ['Arrays', 'Objects', 'Objects', 'Spread', 'Arrays', 'Rest'],

  schedule,
};

const getSchedule = function () {
  for (const [day, { topic, hours }] of Object.entries(student.schedule)) {
    console.log(`Day : ${day}`);
    console.log(`Topic : ${topic}`);
    console.log(`Hours : ${hours}`);
  }
};

// getSchedule();

const getTotalStudyHour = function () {
  let totalStudyHour = 0;
  for (const { hours } of Object.values(student.schedule)) {
    totalStudyHour += hours;
  }
  console.log(`Total Study Hours : ${totalStudyHour}`);
};

// getTotalStudyHour();

const getAverageStudyHours = function () {
  let totalStudyHour = 0;
  for (const { hours } of Object.values(student.schedule)) {
    totalStudyHour += hours;
  }
  console.log(`Average Study Hours : ${totalStudyHour / weekdays.length}`);
};

// getAverageStudyHours();

const getTopicFinished = function () {
  const topicFinished = {};

  for (const topic of student.completedTopics) {
    if (topicFinished[topic]) {
      topicFinished[topic] += 1;
    } else {
      topicFinished[topic] = 1;
    }
  }
  return topicFinished;
};
const topicFinished = getTopicFinished();
console.log(topicFinished);

const getStudyInformation = function () {
  for (const [day, { topic, hours }] of Object.entries(student.schedule)) {
    console.log(`On ${day} study ${topic} for ${hours} hours.`);
  }
};

// getStudyInformation();
const mostCompletedTopic = function () {
  let topic = '';
  let maxCompleted = 0;
  let mostCompletedTopic = [];

  for (const [key, value] of Object.entries(topicFinished)) {
    console.log(key, value);
    if (value > maxCompleted) {
      mostCompletedTopic = [];
      topic = key;
      maxCompleted = value;
      mostCompletedTopic.push(key);
    } else if (value === maxCompleted) {
      topic = key;
      maxCompleted = value;
      mostCompletedTopic.push(key);
    }
  }
  console.log(`Most Completed Topics`);
  for (const topic of mostCompletedTopic) {
    console.log(topic);
  }
};
mostCompletedTopic();
