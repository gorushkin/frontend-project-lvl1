import {
  getRandomInteger,
  game,
} from '..';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestion = () => {
  const question = getRandomInteger(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => game(generateQuestion, greetings);
