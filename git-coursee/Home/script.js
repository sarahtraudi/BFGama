var salvarEmail = function () {
    var email = document.getElementById('inEmail');

    var dados = JSON.parse (localStorage.getItem('dadosEmail'));

    if (dados == null){
        localStorage.setItem("inEmail", "[]");
        dados = [];
    }

    var auxRegistro = {
        email: inEmail.value,
    }

    dados.push(auxRegistro);

    localStorage.setItem("inEmail", JSON.stringify (dados));

    alert ("Registro incluído com sucesso!")
}