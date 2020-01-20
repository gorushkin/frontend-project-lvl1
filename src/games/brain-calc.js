import {
  getRandomInteger,
  game,
} from '..';

const greetings = 'What is the result of the expression?';

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

const generateQuestion = () => {
  const operatorList = '+*-';
  const a = getRandomInteger(0, 10);
  const b = getRandomInteger(0, 10);
  const operator = operatorList[getRandomInteger(0, 2)];
  const question = `${a}${operator}${b}`;
  const answer = calcAnswer(a, b, operator);
  return [answer, question];
};

export default () => game(generateQuestion, greetings);
