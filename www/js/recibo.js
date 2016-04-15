function salvos(){
 document.getElementById("recibo").innerHTML = "";
    if(localStorage.clickcount2 == null)
        {
          document.getElementById("recibo").innerHTML = "Nenhum recibo salvo!";  
        }
    else{
for(var i =0;i <= localStorage.clickcount2;i++)
    {  
        
       document.getElementById("recibo").innerHTML +="<a href='#' id='salvo' onclick='salvo("+i+")'>"+localStorage.getItem("NomeRecibo"+[i])+"</a><br /><hr />";
    
    }
    }
    
}
function salvo(id){
    document.getElementById("mostrar").innerHTML = localStorage.getItem("Recibo"+[id]);
}