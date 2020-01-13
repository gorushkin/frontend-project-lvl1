import {
  hello,
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
  const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';
  const userName = hello(greetings);
  const generateQusestion = () => {
    const operatorStr = '+*-';
    const a = Math.round(Math.random() * 100);
    const b = Math.round(Math.random() * 100);
    const operator = operatorStr[Math.round(Math.random() * 2)];
    const question = `${a}${operator}${b}`;
    console.log(`Question: ${question}`);
    const answer = calcAnswer(a, b, operator);
    return answer;
  };

  game(generateQusestion, userName);
};
