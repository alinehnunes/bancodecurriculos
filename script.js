var mongo = require("mongodb");

function cadastrar(){
    var nome_completo = document.getElementById("nome-completo").value;
    var cargo_pretendido = document.getElementById("cargo-pretendido").value;
    var data_nascimento = document.getElementById("data-de-nascimento").value;
    var estado_civil = document.getElementById("estado-civil").value;
    var sexo = document.getElementById("sexo").value;
    var endereco = document.getElementById("endereco").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var cep = document.getElementById("cep").value;
    var telefone_fixo1 = document.getElementById("telefone-fixo1").value;
    var telefone_fixo2 = document.getElementById("telefone-fixo2").value;
    var celular = document.getElementById("celular").value;
    var contato = document.getElementById("contato").value;
    var email = document.getElementById("email").value;
    var identidade = document.getElementById("identidade").value;
    var cpf = document.getElementById("cpf").value;
    var habilitacao = document.getElementById("habilitacao").value;
    var veiculo = document.getElementById("veiculo").value;

    console.log('dados recebidos')
 
    
    
    //banco de dados

    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017/mydb";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });


}

