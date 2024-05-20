

// ------------------ tests ---- Start
mocha.setup('bdd');
let assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('checkDif', function(){
  function makeTest(num1, num2){
    let expected = num1-num2;
    let result = false;
    if(expected >= 10 && expected <=100){
      result = true;
    } 
    it(`Differenz von ${num1} und ${num2} is kleiner als 100 und größer als 10 = ${result} (${expected})`, function () {
      assert.equal(checkDif(num1, num2), result);
    });
  }
  for(let i = 0;i<=4;i++){
    let num1 = Math.floor(Math.random()*100);
    let num2 = Math.floor(Math.random()*100);
    makeTest(num1, num2);
  }
});
describe('countNums', () => {
  
  function makeTest(arr, num){
    let nums = arr.filter((n) => n == num);
    let result = nums.length;

    it(`Im Array kommt ${num} ${result} oft vor`, function () {
      assert.equal(countNums(arr, num), result);
    });
  }
  for(let i = 0;i<=4;i++){
    let arr = [];
    for(let i = 0; i <= 1500; i++){
      arr.push(Math.floor(Math.random()*100));
    }
    makeTest(arr, Math.floor(Math.random()*100));
  }
});
describe('checkCircles', () => { 

  function makeTest(circle1, circle2){
    let result = 1;
    let resultMessage = 'weder konzentrisch noch deckungsgleich';

    if(circle1.x == circle2.x && circle1.y == circle2.y && circle1.radius == circle2.radius){
      result = 0;
      resultMessage = 'deckungsgleich';
    }else if(circle1.x == circle2.x && circle1.y == circle2.y){
      result = -1;
      resultMessage = 'konzentrisch';
    }

    it(`Die beiden Kreise sind ${resultMessage}`,function () {
      assert.equal(Circle.checkCircle(circle1, circle2), result);
    });
  }

  let circle1_1 = new Circle(10, 10, 10);
  let circle2_1 = new Circle(10, 10, 10);
  let circle1_2 = new Circle(10, 100, 100);
  let circle2_2 = new Circle(100, 100, 100);
  let circle1_3 = new Circle(10, 20, 30);
  let circle2_3 = new Circle(20, 30, 40);

  makeTest(circle1_1, circle2_1);
  makeTest(circle1_2, circle2_2);
  makeTest(circle1_3, circle2_3);
});

describe('Printer - Test', function () {
  function makeTest(printer, action, pageNumber) {
    if(action == 1){
      it(`Papierstand: ${printer.currentPaper-pageNumber} von ${printer.maxPaper}, es wurden ${pageNumber} Seiten gedruckt`, function(){
        assert.equal(printer.printPages(pageNumber), printer.currentPaper);
      });
    }else{
      it(`Papierstand: ${printer.maxPaper} von ${printer.maxPaper}`, function(){
        assert.equal(printer.fillPrinter(),printer.currentPaper);
      });
    }
  }
  let printer1 = new Printer('printer1','00-08-20-83-53-D1', '192.168.19.2', 1500, 'InkJet', true, 600);
  let printer2 = new Printer('printerw','00-08-20-83-53-Dw', '192.168.19.e', 1200, 'InkJet', true, 600);

  printer1.fillPrinter();

  makeTest(printer1,1, 200);
  makeTest(printer2,2);
});



mocha.run();
// ------------------ tests ---- End