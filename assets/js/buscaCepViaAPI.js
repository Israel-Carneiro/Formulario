async function buscaEndereco (cep) {
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
    }
}
