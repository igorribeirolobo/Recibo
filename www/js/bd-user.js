function Usuario(){
    if(localStorage.getItem("NomeUsuario") == null)
        {
            window.location.assign("cadastro_usuario.html")
        }  
}
function CadastrarUsuario(){
    var NomeUsuario = document.getElementById("nome_emitente").value;
    var CPFUsuario = document.getElementById("id_emitente").value;
    var EmailUsuario = document.getElementById("email_emitente").value;
    var RGUsuario = document.getElementById("rg_emitente").value;
    localStorage.setItem("NomeUsuario",NomeUsuario);
    localStorage.setItem("CPFUsuario",CPFUsuario);
    localStorage.setItem("EmailUsuario",EmailUsuario);
    localStorage.setItem("RGUsuario",RGUsuario);
    alert("Cadastro realizado com sucesso!","Sistema");
    window.location.assign("index.html")
    
}