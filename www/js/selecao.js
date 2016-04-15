  function clicar(id){
            
      document.getElementById("nomepagador").value = localStorage.getItem("Nome"+[id]);
      document.getElementById("emailpagador").value = localStorage.getItem("Email"+[id]);
      document.getElementById("celularpagador").value = localStorage.getItem("Celular"+[id]);
      document.getElementById("idpagador").value = localStorage.getItem("CPF"+[id]);
      alert("Cliente selecionado, vá até recibo","Sistema");
      
      
      }