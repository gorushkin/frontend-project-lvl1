import {
  getRandomInteger,
  gameEngine,
} from '..';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandomInteger = 0;
const maxRandomInteger = 100;

const generateQuestionAnswer = () => {
  const question = getRandomInteger(minRandomInteger, maxRandomInteger);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, greetings);
