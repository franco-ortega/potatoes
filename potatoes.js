const sumAllPotatoes = (...args) => {
  return args.reduce((a, c) => {
    if (typeof a === 'string') return a + ' ' + c;

    return a + c;
  });
};

/////////////////////
// function to check the answer

const checkAnswer = (fn, answer, ...nums) => {
  const fnAnswer = fn(...nums);

  if (fnAnswer === answer) console.log('Correct!', fnAnswer);
  else console.log('Incorrect :(', fnAnswer, nums);
};
/////////////////////

console.log('testing...1, 2, 3...');

checkAnswer(sumAllPotatoes, 6, 1, 2, 3);
