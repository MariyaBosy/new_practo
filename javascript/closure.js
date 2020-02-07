let sum=0;
 
 var counter = function (arr) {
    let len = arr.length
   
    for (i = 0; i < len; i++)
        sum = sum+ arr[i];
        console.log(sum);
    return function average(x) {
        sum += x;
        return sum / (len + 1);
    }
}
var average = counter([1, 2, 3, 4, 5])(6);
console.log(average);