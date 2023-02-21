async function buscaEndereco (cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var CEPConvertido = await consultaCEP.json();
    }
}
