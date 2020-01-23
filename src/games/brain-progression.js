import {
  getRandomInteger,
  gameEngine,
} from '..';

const greetings = 'What number is missing in the progression?';
const progressionLength = 10;
const minHiddenNumberPosition = 0;
const maxHiddenNumberPosition = progressionLength - 1;
const minProgressionStep = 1;
const maxProgressionStep = 10;
const minFirstProgressionElement = 0;
const maxFirstProgressionElement = 100;

const generateProgression = (a, d, length) => {
  const progression = [];
  let currentElement = a;
  for (let i = 0; i < length; i += 1) {
    progression.push(currentElement);
    currentElement += d;
  }
  return progression;
};

const generateQuestionAnswer = () => {
  const hiddenNumberPosition = getRandomInteger(minHiddenNumberPosition, maxHiddenNumberPosition);
  const progressionStep = getRandomInteger(minProgressionStep, maxProgressionStep);
  const firstProgressionElement = getRandomInteger(minFirstProgressionElement, maxFirstProgressionElement);
  const progression = generateProgression(firstProgressionElement, progressionStep, progressionLength);
  progression[hiddenNumberPosition] = '..';
  const question = progression.join(' ');
  const answer = String(firstProgressionElement + progressionStep * (hiddenNumberPosition));
  return [answer, question];
};

export default () => gameEngine(generateQuestionAnswer, greetings);
