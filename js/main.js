var listaTareas =[];

// funcion principal:
function clickButton(){
    var inputMensaje = document.getElementById("mensaje").value;
    listaTareas.push({nombre:inputMensaje,isDone:false});
    drawTextList();
    var inputMensaje = document.getElementById("mensaje").value="";
}
// funcion para crear elementos (nuevo método):
function drawTextList(){
   var lista = document.getElementById("lista");
   lista.innerHTML = "";
 
   for(var c in listaTareas){
      var html = "<li> <input type='checkbox' onclick='strikethrough("+c+")' "+(listaTareas[c].isDone?"checked":"")+">"+"<span "+(listaTareas[c].isDone?"style='text-decoration: overline underline line-through'":"style='text-decoration:none'")+" id='new'>"+listaTareas[c].nombre+"</span></input>"+"<span onclick='deleteTasks("+c+")' class='glyphicon  glyphicon-trash , icon , pull-right'>" + "</span>" +"</li>"
      lista.innerHTML += html;
    }
}
// funcion para eliminar lista:
function deleteTasks(_tarea){
listaTareas.splice(_tarea, 1);
   drawTextList();  
}
// funcion para tachar la tarea:
function strikethrough(_var){
    var lista = document.getElementById("lista");
    if(listaTareas[_var].isDone == false){
       listaTareas[_var].isDone=true;
    }else{
        listaTareas[_var].isDone=false;
        lista.childNodes[_var].childNodes[1].style.textDecoration="none";
   }
   drawTextList();
}