function mostrar(){
    document.getElementById("nome_emitente").value = localStorage.getItem("NomeUsuario");
    document.getElementById("id_emitente").value = localStorage.getItem("CPFUsuario");
    document.getElementById("rg_emitente").value = localStorage.getItem("RGUsuario");
    document.getElementById("email_emitente").value = localStorage.getItem("EmailUsuario");
    
    
}