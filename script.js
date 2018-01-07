$(document).ready(function(){

    var firstNumber = "";
    var operator;
    var secondNumber = "";
    var firstInt;
    var secondInt;
    var answer;


    $(".number").on("click", function() {
        console.log($("#operator:empty"));
        if($("#operator").text().length === 0) {
            var numberValue = $(this).attr("value");
            var intVal;
            firstNumber += numberValue;
            $("#first-number").text(firstNumber); // need to parseInt firstNumber later in code.
    
        } else {
            var secondNumberVal = $(this).attr("value");
            secondNumber += secondNumberVal;
            $("#second-number").text(secondNumber); // need to parseInt firstNumber later in code.

        }
    })

    $(".operator").on("click", function() {
        operator = $(this).attr("value");
        var opDis = $(this).text();
        $("#operator").append(opDis);
    })

    $(".equal").on("click", function() {
        if(operator && firstNumber && secondNumber) {
            firstInt = parseInt(firstNumber);
            secondInt = parseInt(secondNumber);
            if(operator === "plus") {
               answer = firstInt + secondInt;
               console.log(answer);
            } else if(operator === "minus") {
                answer = firstInt - secondInt;
                console.log(answer);
            } else if(operator === "divide") {
                answer = firstInt / secondInt;
                console.log(answer);
            } else if(operator === "times") {
                answer = firstInt * secondInt;
                console.log(answer);
            } else if(operator === "power") {
                answer = firstInt ** secondInt;
                console.log(answer);
            }  
            $("#result").append(answer);
        }


    })

    $(".clear").on("click", function() {
        $("#first-number, #second-number, #operator, #result").empty();
        firstNumber = "";
        operator;
        secondNumber = "";
        firstInt;
        secondInt;
        answer;
    })
});