import {
  getRandomInteger,
  gameEngine,
} from '..';

const greetings = 'What is the result of the expression?';
const minRandomInteger = 0;
const maxRandomInteger = 10;
const operators = '+*-';
const operatorsLength = 2;

const calcAnswer = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return result;
};

const generateQuestionAnswer = () => {
  const a = getRandomInteger(minRandomInteger, maxRandomInteger);
  const b = getRandomInteger(minRandomInteger, maxRandomInteger);
  const operator = operators[getRandomInteger(0, operatorsLength)];
  const question = `${a}${operator}${b}`;
  const answer = String(calcAnswer(a, b, operator));
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, greetings);
