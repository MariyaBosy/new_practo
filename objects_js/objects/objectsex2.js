var Fruit={
    name:"Maria",
    sweetness:8,
    color:"yellow",
    // newname:function(){
    //     Fruit.name="Mango";
    //     console.log("fruit name" + this.name);
    // }

}
// Fruit.newname();

delete Fruit.name;
for(var i in Fruit)
console.log(i);
