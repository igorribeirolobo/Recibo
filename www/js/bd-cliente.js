function cadastrar(){
        var nome = document.getElementById("NomeCliente").value;
    var email = document.getElementById("EmailCliente").value;
    var celular = document.getElementById("CelularCliente").value;
    var cpf = document.getElementById("CPFCliente").value;  
    if (localStorage.clickcount != null) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 0;
        }
if (typeof(Storage) !== "undefined") {
    // Store
        
    localStorage.setItem("Nome"+[localStorage.clickcount], nome);
    localStorage.setItem("Email"+[localStorage.clickcount], email);
    localStorage.setItem("Celular"+[localStorage.clickcount],celular);
    localStorage.setItem("CPF"+[localStorage.clickcount],cpf);
        document.getElementById("NomeCliente").value = null;
        document.getElementById("EmailCliente").value = null;
        document.getElementById("CelularCliente").value = null;
        document.getElementById("CPFCliente").value = null;
        alert("Cadastro efetuado com sucesso!","Sistema");
            
        }
else {
    document.getElementById("teste").innerHTML = "Sorry, your browser does not support Web Storage...";
}
    
}