import CPFValido from "./validaCPF.js";
import maiorDeIdade from "./validaIdade.js";
const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "sobrenome": e.target.elements["sobrenome"].value,
        "nascimento": e.target.elements["nascimento"].value,
        "telefone": e.target.elements["telefone"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "email": e.target.elements["email"].value,
        "cep": e.target.elements["cep"].value,
        "endereco": e.target.elements["endereco"].value,
        "numero": e.target.elements["numero"].value,
        "complemento": e.target.elements["complemento"].value,
        "bairro": e.target.elements["bairro"].value,
        "cidade": e.target.elements["cidade"].value,
        "estado": e.target.elements["estado"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = './assets/html/cadastro-concluido.html'
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido.",
    },
    sobrenome: {
        valueMissing: "O sobrenome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um sobrenome válido.",
        tooShort: "Por favor, preencha um sobrenome válido.",
    },
    nascimento: {
        valueMissing: 'A data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    telefone: {
        valueMissing: "O telefone não pode estar vazio.",
        patternMismatch: "Por favor, preencha um telefone válido.",
        tooShort: "O telefone não tem caractéres suficientes.",
    },
    rg: {
        valueMissing: "O RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O RG não tem caractéres suficientes.",
    },
    cpf: {
        valueMissing: 'O CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O CPF não tem caractéres suficientes.",
    },
    email: {
        valueMissing: "O e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido.",
    },
    cep: {
        valueMissing: "O CEP não pode estar vazio.",
        patternMismatch: "Por favor, preencha um CEP válido.",
        customError: "O CEP digitado não existe.",
        tooShort: "O CEP não tem caractéres suficientes.",
    },
    endereco: {
        valueMissing: "O endereço não pode estar vazio.",
        patternMismatch: "Por favor, preencha um endereço válido.",
        tooShort: "O endereço não tem caractéres suficientes.",
    },
    numero: {
        valueMissing: "O número de endereço não pode estar vazio.",
        patternMismatch: "Por favor, preencha um número de endereço válido.",
        tooShort: "O número de endereço não tem caractéres suficientes.",
    },
    bairro: {
        valueMissing: "O bairro não pode estar vazio.",
        patternMismatch: "Por favor, preencha um bairro válido.",
        tooShort: "O bairro não tem caractéres suficientes.",
    },
    cidade: {
        valueMissing: "A cidade não pode estar vazio.",
        patternMismatch: "Por favor, preencha uma cidade válida.",
        tooShort: "A cidade não tem caractéres suficientes.",
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11) {
        CPFValido(campo);
    }
    if (campo.name == "nascimento" && campo.value != "") {
        maiorDeIdade(campo);
    }
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}