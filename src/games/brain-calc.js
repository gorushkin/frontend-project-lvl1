import gameEngine from '..';
import getRandomInteger from '../utils';

const gameDescription = 'What is the result of the expression?';
const operators = '+*-';

// const calcAnswer = (a, b, operator) => {
//   switch (operator) {
//     case '+':
//       return a + b;
//     case '-':
//       return a - b;
//     case '*':
//       return a * b;
//     default:
//       break;
//   }
// };

const calcAnswer = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  return a * b;
};


const generateQuestionAnswer = () => {
  const a = getRandomInteger(0, 100);
  const b = getRandomInteger(0, 100);
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const question = `${a}${operator}${b}`;
  const answer = String(calcAnswer(a, b, operator));
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, gameDescription);
