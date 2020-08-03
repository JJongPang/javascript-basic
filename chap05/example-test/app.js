//연습뭍문제
//propt문으로 숫자를 2개 입력받아 더한 결과를 출력하세요.

var num1 = prompt('첫 번째 숫자를 입력', '숫자를 입력해주세요');
var num2 = prompt('두 번째 숫자를 입력', '숫자를 입력해주세요');

var parseNum1 = parseInt(num1);
var parseNum2 = parseInt(num2);

console.log(typeof parseNum1);
console.log(typeof parseNum2);

if(parseNum1 === '' || isNaN(parseNum1) && parseNum2 === '' || isNaN(parseNum2)) {
    alert('올바르게 입력해주세요');
}else {
    document.write(parseNum1 + ' + ' + parseNum2 + ' = ' + (parseNum1 + parseNum2));
} 