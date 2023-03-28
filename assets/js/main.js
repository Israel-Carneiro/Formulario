import CPFValido from "./validaCPF.js";
import maiorDeIdade from "./validaIdade.js";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        CPFValido(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        maiorDeIdade(campo);
    }
}