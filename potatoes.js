const sumAllPotatoes = (...args) => {
  return args.reduce((a, c) => {
    if (typeof a === 'string') return a + ' ' + c;

    return a + c;
  });
};

/////////////////////
// function to check the answer

const checkAnswer = (fn, answer, ...nums) => {
  const fnAnswer = fun(nums);

  if (fnAnswer === answer) console.log('Correct!');
  else console.log('Incorrect :(');
};
/////////////////////

const firstAnswer = allThePotatoes(1, 2, 3);
const firstExpected = 6;

if (firstAnswer === 6) console.log('First answer, CORRECT');
else console.log('First answer, WRONG:', firstAnswer);

const secondAnswer = allThePotatoes(4, 5, 6, 7);
const secondExpected = 22;

if (secondAnswer === 22) console.log('Second answer, CORRECT');
else console.log('Second answer, WRONG:', secondAnswer);

const countAllThePotatoes = (...potatoes) => {
  const count = potatoes.length;
  const total = allThePotatoes(...potatoes);

  return { count, total };
};

const potatoCountAndTotal = countAllThePotatoes(1, 2, 3);
console.log(potatoCountAndTotal);

const potatoWords = allThePotatoes(
  'french fries',
  'hash browns',
  'mashed potatoes'
);
console.log(potatoWords);
