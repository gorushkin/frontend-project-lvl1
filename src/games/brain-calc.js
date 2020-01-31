import gameEngine from '..';
import getRandomInteger from '../utils';

const gameDescription = 'What is the result of the expression?';
const operators = '+*-';

const getAnswer = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      break;
  }
  return false;
};

const generateQuestionAnswer = () => {
  const a = getRandomInteger(0, 100);
  const b = getRandomInteger(0, 100);
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const question = `${a}${operator}${b}`;
  const answer = String(getAnswer(a, b, operator));
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, gameDescription);
