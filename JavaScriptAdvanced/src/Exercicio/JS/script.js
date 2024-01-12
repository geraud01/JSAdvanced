// Transformei todos os codigos para Arrow Functions


const calcularMedia = (notas) => {
    let soma = 0;
    for (let c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    const media = soma / notas.length;

    return media;
};


let media; // escopo global

const aprovacao = (notas) => {
    const media = calcularMedia(notas); // escopo da função

    const condicao = media >= 8 ? "aprovado" : "reprovado";

    return `Média: ${media} - Resultado: ${condicao}`;
};



// Função Recursivas

const contagemRegressiva = (numero) => {
    console.log(numero);

    const proximoNumero = numero - 1;

    if (proximoNumero > 0) {
        contagemRegressiva(proximoNumero);
    }
};


// contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if (formulario1) {
    formulario1.addEventListener('submit', function (evento) {
        evento.preventDefault();
        evento.stopPropagation();

        if (this.classList.contains('erro')) {
            return false;
        }

        const dados = new FormData(this);
        const notas = Array.from(dados.values())
            .map(valor => Number(valor))
            .filter(numero => !isNaN(numero));

        console.log(notas);

        if (typeof aprovacao === 'function') {
            const texto = aprovacao(notas);
            document.getElementById('resultado').textContent = texto;
        } else {
            console.error('A função "aprovacao" não está definida.');
        }
    });
}

function validaCampo(elemento) {
    elemento.addEventListener('focusout', function (event) {
        event.preventDefault();

        if (this.value === "") {
            exibirMensagemErro("verifique o preenchimento dos campos em vermelho", this);
        } else {
            ocultarMensagemErro();
        }
    });
}

function validaCampoNumerico(elemento) {
    elemento.addEventListener('focusout', function (event) {
        event.preventDefault();

        const numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        if (numero !== "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
            ocultarMensagemErro();
        } else {
            exibirMensagemErro("verifique o preenchimento dos campos em destaque", this);
        }
    });
}

function validaEmail(elemento) {
    elemento.addEventListener('focusout', function (event) {
        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

        if (this.value.match(emailValido)) {
            ocultarMensagemErro();
        } else {
            exibirMensagemErro("verifique o preenchimento dos campos em destaque", this);
        }
    });
}

function exibirMensagemErro(mensagem, elemento) {
    document.querySelector('.mensagem').textContent = mensagem;
    elemento.classList.add('erro');
    elemento.parentNode.classList.add('erro');
}

function ocultarMensagemErro() {
    document.querySelector('.mensagem').textContent = "";
    document.querySelectorAll('.erro').forEach(elemento => elemento.classList.remove('erro'));
}

const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
const camposNumericos = document.querySelectorAll('input.numero');
const camposEmail = document.querySelectorAll('input.email');

camposObrigatorios.forEach(validaCampo);
camposNumericos.forEach(validaCampoNumerico);
camposEmail.forEach(validaEmail);
