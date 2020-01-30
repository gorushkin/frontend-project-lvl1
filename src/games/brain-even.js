import gameEngine from '..';
import getRandomInteger from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAnswer = () => {
  const question = getRandomInteger(0, 100);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, gameDescription);
