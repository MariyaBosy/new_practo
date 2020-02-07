



//     var friends=[{name:"maria",country:"india"},{name:"reema",country:"Srilanka"},{name:"dania",country:"china"},{name:"nandita",country:"bangladesh"}];
//     friends.forEach(function(eachName,index){
// console.log(index+1,".",eachName);
//     });

var school = {schoolName:"MIT",location:"bangalore",schoolAccredited: true};
console.log(school.hasOwnProperty ("schoolName"));
for(var i in school)
{
    console.log(school[i]);
}


