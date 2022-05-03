var a = document.getElementById("out1");
var b = document.getElementById("out2");

function num(x) {
    a.value += x;
}

function clear() {
    a.value = "";
    b.value = "";
}

function cancel() {
    a.value = a.value.substr(0, a.value.length - 1);
}

function equ() {
    b.value = eval(a.value);
}