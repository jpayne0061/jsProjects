function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

var collectInput = '';
var expression = [];

$(".number").click(function () {
    var buttonNum = $(this).html();
    $("#screen").append(buttonNum);
    collectInput += buttonNum;
});

$(".operator").click(function () {
    var operator = $(this).html();
    $("#screen").append(operator);
    expression.push(parseFloat(collectInput));
    expression.push(operator);
    collectInput = '';
});

$(".clear").click(function () {
    collectInput = '';
    expression = [];
    $("#screen").html('');
});


$("#equals").click(function () {
    expression.push(parseFloat(collectInput));

    while (expression.length > 2) {

        if (expression[1] === '+') {
            var answer = add(expression[0], expression[2]);
        } else if (expression[1] === '-') {
            var answer = subtract(expression[0], expression[2]);
        } else if (expression[1] === '÷') {
            var answer = divide(expression[0], expression[2]);
        } else if (expression[1] === 'x') {
            var answer = multiply(expression[0], expression[2]);
        }
        expression.splice(0, 3, answer);
    }
    $("#screen").html(answer);
})












