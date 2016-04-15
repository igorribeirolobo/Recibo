function exibir(){
    document.getElementById("clientes").innerHTML = "";
    if(localStorage.clickcount == null)
        {
          document.getElementById("clientes").innerHTML = "Nenhum cliente cadastrado!";  
        }
    else{
for(var i =0;i <= localStorage.clickcount;i++)
    {  
        
       document.getElementById("clientes").innerHTML +="<a href='#' id='id' onclick='clicar("+i+")'>"+localStorage.getItem("Nome"+[i])+"</a><br /><hr />";
    
    }
    }
}
