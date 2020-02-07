
var number1= 0,number2= 1,sum = 1;
function fibonacci(n) { 
    console.log(number1);
    console.log(number2);
    for(var i = 2; i <= n; i++) {
        sum = number1+number2;
        number1= number2;
        number2= sum;
        console.log("," +sum);
    }
}

    fibonacci(7)
