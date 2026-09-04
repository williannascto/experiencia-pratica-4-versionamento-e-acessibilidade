function validarNome(nome) {
    return nome.trim().length >= 3;
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email.trim());
}

function validarTelefone(telefone) {
    const somenteNumeros = telefone.replace(/\D/g, '');
    return somenteNumeros.length >= 10 && somenteNumeros.length <= 11;
}

function mostrarErro(campo, mensagem) {
    campo.classList.add('erro');
    campo.setAttribute('aria-invalid', 'true');

    const idMensagemErro = `${campo.id}-erro`;

    let mensagemErro = campo.parentElement.querySelector(`#${idMensagemErro}`);

    if (!mensagemErro) {
        mensagemErro = document.createElement('small');

        mensagemErro.id = idMensagemErro;
        mensagemErro.classList.add('mensagem-erro');
        mensagemErro.setAttribute('role', 'alert');

        campo.parentElement.appendChild(mensagemErro);
    }

    mensagemErro.textContent = mensagem;

    campo.setAttribute('aria-describedby', idMensagemErro);
}

function limparErro(campo) {
    campo.classList.remove('erro');
    campo.setAttribute('aria-invalid', 'false');
    campo.removeAttribute('aria-describedby');

    const idMensagemErro = `${campo.id}-erro`;
    const mensagemErro = campo.parentElement.querySelector(`#${idMensagemErro}`);

    if (mensagemErro) {
        mensagemErro.remove();
    }
}

function validarFormulario(formulario) {
    const campoNome = formulario.querySelector('#nome');
    const campoEmail = formulario.querySelector('#email');
    const campoTelefone = formulario.querySelector('#telefone');

    let formularioValido = true;

    limparErro(campoNome);
    limparErro(campoEmail);
    limparErro(campoTelefone);

    if (!validarNome(campoNome.value)) {
        mostrarErro(
            campoNome,
            'Informe um nome com pelo menos 3 caracteres.'
        );

        formularioValido = false;
    }

    if (!validarEmail(campoEmail.value)) {
        mostrarErro(
            campoEmail,
            'Informe um e-mail válido.'
        );

        formularioValido = false;
    }

    if (!validarTelefone(campoTelefone.value)) {
        mostrarErro(
            campoTelefone,
            'Informe um telefone com 10 ou 11 dígitos.'
        );

        formularioValido = false;
    }

    if (!formularioValido) {
        const primeiroCampoInvalido =
            formulario.querySelector('[aria-invalid="true"]');

        if (primeiroCampoInvalido) {
            primeiroCampoInvalido.focus();
        }
    }

    return formularioValido;
}

window.validacao = {
    validarFormulario
};