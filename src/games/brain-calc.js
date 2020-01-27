import {
  getRandomInteger,
  gameEngine,
} from '..';

const greetings = 'What is the result of the expression?';
const operators = '+*-';

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
  const a = getRandomInteger(0, 100);
  const b = getRandomInteger(0, 100);
  const operator = operators[getRandomInteger(0, operators.length)];
  const question = `${a}${operator}${b}`;
  const answer = String(calcAnswer(a, b, operator));
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, greetings);
