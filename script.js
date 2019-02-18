var weightJohn,heightJohn,heightMark,weightMark;
weightJohn=prompt('EnterJohn\'s weight');
heightJohn=prompt('EnterJohn\'s height');

var bmiJohn=weightJohn/(heightJohn*heightJohn);
console.log(bmiJohn)

weightMark=prompt('EnterMark\'s weight');
heightMark=prompt('EnterMark\'s height');

var bmiMark=weightMark/(heightMark*heightMark);
console.log(bmiMark)

var isHigher=(bmiJohn>bmiMark);
console.log('John\'s BMI is Greater than Mark\'s BMI' + '  '+ isHigher );


var name='John';
var age=16;


