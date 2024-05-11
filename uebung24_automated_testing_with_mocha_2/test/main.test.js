// step1
// ------------------ tests ---- Start
mocha.setup('bdd'); // minimal setup
let assert = chai.assert; // chai has a lot of stuff, let's make assert global
chai.config.truncateThreshold = 0; // disable truncating
describe('myPow', function () {
  it('raises to n-th power', function () {
    assert.equal(myPow(2, 3), 8);
  });
});
mocha.run();
// ------------------ tests ---- End