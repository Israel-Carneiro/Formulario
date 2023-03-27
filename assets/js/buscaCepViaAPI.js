async function buscaEndereco (cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var CEPConvertido = await consultaCEP.json();
        if (CEPConvertido.erro) {
            throw Error('CEP inexistente!');
        }

        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');
        logradouro.value = CEPConvertido.logradouro;
        bairro.value = CEPConvertido.bairro;
        cidade.value = CEPConvertido.localidade;
        estado.value = CEPConvertido.uf;

        console.log(CEPConvertido);
        return CEPConvertido;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente.</p>`
        console.log(erro)
    }
}

cep = document.getElementById('cep');
addEventListener("blur", () =>buscaEndereco(cep.value));
