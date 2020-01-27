import {
  getRandomInteger,
  gameEngine,
} from '..';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAnswer = () => {
  const question = getRandomInteger(0, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, greetings);
