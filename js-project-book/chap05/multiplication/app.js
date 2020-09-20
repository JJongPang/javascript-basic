var num = prompt('구구단 몇 단을 볼까요?', '1~9의 숫자를 입력');

if(num == '' || isNaN(num)) {
    alert('올바른 값을 입력 하세요.');
}else if(num < 1 || num > 10) {
    alert('1부터 9까지 입력할 수 있습니다.');
}else {
    for(var i = 1; 1 < 10; i++) {
        document.write(num + ' * ' + i + ' = ' + num * i + '<br />');
    }
}