// ----- Q1 -----
console.log('Q1 Even Numbers');
for (let i = 0; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// ----- Q2 -----
console.log('\nQ2 Squaring numbers');
for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}

// ----- Q3 -----
console.log('\nQ3 Odd Numbers');
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
// ----- Q4 -----
console.log('\nQ4 Fibonacci sequence ');
let firstNum = 0;
let secondNum = 1;

for (let i = 0; i < 10; i++) {
  console.log(firstNum);
  let temp = firstNum;
  firstNum = secondNum;
  secondNum = temp + firstNum;
}
// ----- Q5 -----
console.log('\nQ5 Sequare numbers ');
for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}

// ----- Q6 -----
console.log('\nQ6 Multiplication  numbers 1-3 ');
for (let index1 = 1; index1 <= 3; index1++) {
  for (let index2 = 1; index2 <= 10; index2++) {
    console.log(`${index1} x ${index2} = ${index1 * index2} `);
  }
}