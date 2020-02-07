// const wait = time => new Promise((resolve) =>setTimeout(resolve,time));
// wait(3000).then(()

// let fruits=["mango","apple","banana"];
// fruits.push("berry");
// for(i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i],i);
// }

// fruits.forEach(function(x,y ){
//     console.log(x,y)
// })
// console.log(fruits.indexOf("apple"));
// let numbers = [1, 4, 9]
// let roots = numbers.map(num => {
//     return Math.sqrt(num)
// })
// console.log(roots);

let kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
let rObj = {}
rObj[obj.key] = obj.value
return rObj
})