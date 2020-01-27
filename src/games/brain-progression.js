import {
  getRandomInteger,
  gameEngine,
} from '..';

const greetings = 'What number is missing in the progression?';
const progressionLength = 10;
const maxHiddenNumberIndex = progressionLength - 1;

const generateProgression = (firstProgressionElement, progressionStep, length) => {
  const progression = [];
  let currentElement = firstProgressionElement;
  for (let i = 0; i < length; i += 1) {
    progression.push(currentElement);
    currentElement += progressionStep;
  }
  return progression;
};

const generateQuestionAnswer = () => {
  const hiddenNumberPosition = getRandomInteger(0, maxHiddenNumberIndex);
  const progressionStep = getRandomInteger(0, 10);
  const firstProgressionElement = getRandomInteger(0, 100);
  const progression = generateProgression(
    firstProgressionElement, progressionStep, progressionLength,
  );
  progression[hiddenNumberPosition] = '..';
  const question = progression.join(' ');
  const answer = String(firstProgressionElement + progressionStep * (hiddenNumberPosition));
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, greetings);
