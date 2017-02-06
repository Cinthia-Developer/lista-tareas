var listaTareas =[];

// funcion principal:
function clickButton(){
    var inputMensaje = document.getElementById("mensaje").value;
    if(inputMensaje === ""){
        alert("No se puede agregar la tarea si el campo esta vacio");
        return false;
    }else{
       listaTareas.push({nombre:inputMensaje,isDone:false});
        drawTextList();
        var inputMensaje = document.getElementById("mensaje").value="";
    }
}
// funcion para crear elementos (nuevo método):
function drawTextList(){
   var lista = document.getElementById("lista");
   lista.innerHTML = "";
 
   for(var i in listaTareas){
      var html = "<li> <input type='checkbox' onclick='strikethrough("+i+")' "+(listaTareas[i].isDone?"checked":"")+">"+"<span "+(listaTareas[i].isDone?"style='text-decoration: overline underline line-through'":"style='text-decoration:none'")+" id='new'>"+listaTareas[i].nombre+"</span></input>" + "<span onclick='deleteTasks("+i+")' class='glyphicon  glyphicon-trash , icon , pull-right'>" + "</span>" +"</li>"
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