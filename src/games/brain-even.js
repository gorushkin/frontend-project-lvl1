import {
  getRandomInteger,
  game,
} from '..';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const question = getRandomInteger(0, 100);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [answer, question];
};

export default () => game(generateQuestion, greetings);
