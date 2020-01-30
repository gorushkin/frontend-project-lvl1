import gameEngine from '..';
import getRandomInteger from '../utils';

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

const generateQuestionAnswer = () => {
  const a = getRandomInteger(0, 100);
  const b = getRandomInteger(0, 100);
  const question = `${a} ${b}`;
  const answer = String(findGcd(a, b));
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, greetings);
