// ------------------ tests ---- Start
mocha.setup('bdd');
let assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('add', function(){
  function makeTest(num1, num2){
    let expected = num1+num2;
    it(`${num1} + ${num2} = ${expected}`, function () {
      assert.equal(add(num1,num2),expected);
    });
  }
  for (let i = 1; i <= 5; i++) {
    makeTest(10,i);
  }
});
describe('sub', function(){
  function makeTest(num1, num2){
    let expected = num1-num2;
    it(`${num1} - ${num2} = ${expected}`, function () {
      assert.equal(sub(num1,num2),expected);
    });
  }
  for (let i = 1; i <= 5; i++) {
    makeTest(10,i);
  }
});
describe('mult', function(){
  function makeTest(num1, num2){
    let expected = num1*num2;
    it(`${num1} * ${num2} = ${expected}`, function () {
      assert.equal(mult(num1,num2),expected);
    });
  }
  for (let i = 1; i <= 5; i++) {
    makeTest(10,i);
  }
});
describe('div', function(){
  function makeTest(num1, num2){
    let expected = num1/num2;
    it(`${num1} / ${num2} = ${expected}`, function () {
      assert.equal(div(num1,num2),expected);
    });
  }
  for (let i = 1; i <= 5; i++) {
    makeTest(10,i);
  }
});
describe('square', function(){
  function makeTest(num1){
    let expected = num1**2;
    it(`${num1} ^ 2 = ${expected}`, function () {
      assert.equal(square(num1),expected);
    });
  }
  for (let i = 1; i <= 5; i++) {
    makeTest(i);
  }
});
describe('pow', function(){
  function makeTest(num1, num2){
    let expected = num1**num2;
    it(`${num1} ^ ${num2} = ${expected}`, function () {
      assert.equal(pow(num1,num2),expected);
    });
  }
  for (let i = 1; i <= 5; i++) {
    makeTest(10,i);
  }
});
describe('root', function(){
  function makeTest(num1, num2){
    let expected = num1**(1/num2);
    it(`Die ${num2}te Wurzel von ${num1} = ${expected}`, function () {
      assert.equal(root(num1,num2),expected);
    });
  }
  for (let i = 1; i <= 5; i++) {
    makeTest(10,i);
  }
});

mocha.run();
// ------------------ tests ---- End