import {
  getRandomInteger,
  game,
} from '..';

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

export default () => {
  const greetings = 'What is the result of the expression?';
  const generateQusestion = () => {
    const operatorStr = '+*-';
    const a = getRandomInteger(0, 10);
    const b = getRandomInteger(0, 10);
    const operator = operatorStr[getRandomInteger(0, 2)];
    const question = `${a}${operator}${b}`;
    console.log(`Question: ${question}`);
    const answer = calcAnswer(a, b, operator);
    return answer;
  };

  game(generateQusestion, greetings);
};
