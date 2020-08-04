var d = new Date(),
    year = d.getFullYear();

var input = document.getElementById('age');


function age() { 
    var val = input.value;
    var answer = year - val;
    alert(answer);
}