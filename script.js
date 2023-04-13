function validaCep() {
    console.log("valida cep")

    var cep = document.getElementById('cep').value;

    const regex = new RegExp(/^[0-9]{5}-?[0-9]{3}$/gm);
    let result = regex.test(cep);
    console.log(result)

    if (result === true) {
        consultarCep(cep)
    } else {
        alert("Insira um CEP Válido")
    }
}

async function consultarCep(cep) {
    console.log("clique consulta 1")

    var url = 'https://viacep.com.br/ws/' + cep + '/json/';


    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.status == 200) {
        console.log("clique consulta 2")
        document.getElementById('cep').value = jsonData.cep;
        document.getElementById('logradouro').value = jsonData.logradouro;
        document.getElementById('bairro').value = jsonData.bairro;
        document.getElementById('cidade').value = jsonData.localidade;
    }
}

function clearInputs() {
    console.log("clique limpar")

    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
}