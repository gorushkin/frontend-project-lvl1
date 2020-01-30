import gameEngine from '..';
import getRandomInteger from '../utils';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= number / Math.sqrt(number); i += 1) {
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
