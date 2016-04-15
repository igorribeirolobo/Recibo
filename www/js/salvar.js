function salvar(){
    if (localStorage.clickcount2 != null) {
            localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
        } else {
            localStorage.clickcount2 = 0;
        }
    var recibo = " <label><center><h3><u>R E C I B O</u></h3></center> <p align=”Justify”>Recibo R$ ***"+myParam["valor"]+"***<br /><br /> Recebi(emos) de"+myParam["nomepagador"].replace("+"," ")+"- CPF/CNPJ n°"+myParam["idpagador"]+", a importância supra de: ***("+myParam["valor_ext"]+")*** - referente a:"+myParam["referente"].replace("+"," ")+". E, para maior clareza firmo o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevogável quitação, pelo valor recebido.Pagamento efetuado através do cheque n°:"+myParam["n"]+" do Banco:"+myParam["banco"]+" Agência:"+myParam["ag"]+".Para todos os fins de direito, a validade do presente Recibo fica condicionada ao recebimento do cheque acima identificado.</p><p align=”right”>"+myParam["cidade"].replace("+"," ")+","+data.getDate()+" de "+ monName[data.getMonth()]+" de "+data.getFullYear()+","+myParam["nome_emitente"].replace("+"," ")+"  RG/IE n° "+myParam["rg_emitente"]+" CPF/CNPJ n° "+myParam["id_emitente"];
if (typeof(Storage) !== "undefined") 
    {   localStorage.setItem("NomeRecibo"+[localStorage.clickcount2],data.getDay()+"/"+data.getMonth()+"-"+data.getHours());
        localStorage.setItem("Recibo"+[localStorage.clickcount2],recibo);
        alert("Recibo salvo com sucesso!","Sistema");
    }
    else {
    document.getElementById("teste").innerHTML = "Sorry, your browser does not support Web Storage...";
}
    
}