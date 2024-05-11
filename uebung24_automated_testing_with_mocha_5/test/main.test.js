// step1
// ------------------ tests ---- Start
mocha.setup('bdd'); // minimal setup
let assert = chai.assert; // chai has a lot of stuff, let's make assert global
chai.config.truncateThreshold = 0; // disable truncating
describe('myPow', function () {
  function makeTest(base) {
    let expected = base * base * base;
    it(`${base} in the power 3 is ${expected}`, function () {
      assert.equal(myPow(base, 3), expected);
    });
  }
  for (let i = 1; i <= 5; i++) {
    makeTest(i);
  }
});
mocha.run();
// ------------------ tests ---- End