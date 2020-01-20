import {
  getRandomInteger,
  game,
} from '..';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const progressionLength = 10;
  const hiddenNumberPosition = getRandomInteger(0, progressionLength - 1);
  const progressionStep = getRandomInteger(1, 10);
  const firstProgressionElement = getRandomInteger(0, 100);
  let currentProgressionElement = firstProgressionElement;
  let question = '';
  let answer;
  for (let i = 0; i < progressionLength; i += 1) {
    if (hiddenNumberPosition === i) {
      answer = currentProgressionElement;
      question = `${question} ..`;
    } else {
      question = `${question} ${currentProgressionElement}`;
    }
    currentProgressionElement += progressionStep;
  }
  return [answer, question];
};

export default () => game(generateQuestion, greetings);
