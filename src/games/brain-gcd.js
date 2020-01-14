import {
  hello,
  game,
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

export default () => {
  const greetings = 'Find the greatest common divisor of given numbers.';
  const userName = hello(greetings);
  const generateQusestion = () => {
    const a = Math.round(Math.random() * 100);
    const b = Math.round(Math.random() * 100);
    const question = `${a} ${b}`;
    console.log(`Question: ${question}`);
    const answer = findGcd(a, b);
    return answer;
  };

  game(generateQusestion, userName);
};
