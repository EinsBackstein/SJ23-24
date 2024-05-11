// step1
// ------------------ tests ---- Start
mocha.setup('bdd'); // minimal setup
let assert = chai.assert; // chai has a lot of stuff, let's make assert global
chai.config.truncateThreshold = 0; // disable truncating
// step3
// step4
describe('myPow', function () {
  it('2 raised to power 3 is 8', function () {
    assert.equal(myPow(2, 3), 8);
  });
  it('3 raised to power 4 is 81', function () {
    assert.equal(myPow(3, 4), 81);
  });
});
mocha.run();
// ------------------ tests ---- End