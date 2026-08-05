'use strict';

//CODING CHALLANGE 4

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!

Afterwards, test with your own test data!
GOOD LUCK �
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const buttonEl = document.querySelector('button');
const textAreaEl = document.querySelector('textarea');
buttonEl.addEventListener('click', function () {
  const inputtedText = textAreaEl.value.toLowerCase().split('\n');

  console.log(inputtedText);

  for (const [i, text] of inputtedText.entries()) {
    const textTrimmed = text.trim();
    // console.log(textTrimmed);

    const [first, second] = textTrimmed.split('_');
    // console.log(first, second);

    const capitalizeSecond = second[0].toUpperCase() + second.slice(1);
    // console.log(capitalizeSecond);

    const camelCase = first + capitalizeSecond;

    console.log(`${camelCase.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
