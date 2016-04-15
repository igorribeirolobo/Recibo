function salvo(id){
    document.getElementById("mostrar").innerHTML = localStorage.getItem("Recibo"+[id])+"<br /><br /><a href='#' id='limpar' onclick='limpar()'>Fechar</a>";
    
}
function limpar(){
    document.getElementById("mostrar").innerHTML = "";
}