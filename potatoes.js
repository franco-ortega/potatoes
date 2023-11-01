const sumAllPotatoes = (nums) => {
  return nums.reduce((a, c) => {
    if (typeof a === 'string') return a + ' ' + c;

    return a + c;
  });
};

/////////////////////
// function to check the answer

const checkAnswer = (fn, expected, args) => {
  const actual = fn(args);

  if (actual === expected) console.log('Correct!', actual);
  else console.log('Incorrect :(', actual);
};
/////////////////////

console.log('testing...1, 2, 3...');

checkAnswer(sumAllPotatoes, 6, [1, 2, 3]);
