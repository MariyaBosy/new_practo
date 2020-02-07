

// let data = [];

let id = 0;
// var i = 1;

function insertcard() {
  
  var text = document.getElementById("text").value;
  document.getElementById("text").value =" ";
  
  let obj = {
     content:text,
    id: id + 1
  };
  
    createcard(obj);
}
   

function createcard(obj)
{

const div = document.createElement('div');
const h4 = document.createElement('h4');
var removeButton = document.createElement("BUTTON");
var editButton= document.createElement("BUTTON");
const parent = document.getElementById("parent");

  parent.append(div);
  div.append(h4);
  div.append(removeButton);
  div.append(editButton);

  div.setAttribute('class','card');
  
  removeButton.setAttribute('id','close');
  editButton.setAttribute('id','edit');

  h4.innerHTML=obj.content;
  removeButton.innerHTML = "X";
 editButton.innerHTML="Edit";

  removeButton.onclick = function close() {
    div.remove()
  }

editButton.onclick = function edit(){
  div.remove();
  const editTextdiv= document.createElement("div")
  const textarea = document.createElement("textarea");
  var saveButton= document.createElement("BUTTON");
  
    editTextdiv.setAttribute('id','edittext');
    textarea.setAttribute('id','content1');
    parent.append(editTextdiv);
    editTextdiv.append(textarea);
    editTextdiv.append(saveButton);
    saveButton.setAttribute('id','save');
    textarea.innerHTML=obj.content;
    
    saveButton.innerHTML="Save";


    saveButton.onclick = function save(){
      var editedtext = document.getElementById("content1").value;
      obj.content=editedtext;
      editTextdiv.remove();
      createcard(obj);
  }
}


}  







 