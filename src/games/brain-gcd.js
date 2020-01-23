import {
  getRandomInteger,
  gameEngine,
} from '..';

const findGcd = (x, y) => {
  let a = x;
  let b = y;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const greetings = 'Find the greatest common divisor of given numbers.';
const minRandomInteger = 0;
const maxRandomInteger = 100;


const generateQuestionAnswer = () => {
  const a = getRandomInteger(minRandomInteger, maxRandomInteger);
  const b = getRandomInteger(minRandomInteger, maxRandomInteger);
  const question = `${a} ${b}`;
  const answer = String(findGcd(a, b));
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, greetings);
