function verificar() {
    let login = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    console.log(login)
    console.log(senha)
  
    if (login == "adm" && senha == "123a") {
      alert("Sucesso");
      window.location.href = "pages/pagina-2.html";
    }else{
        alert("Preencha os campos ou login e senha errados!");
    }
}
    
