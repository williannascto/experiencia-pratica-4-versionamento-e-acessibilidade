const app = document.querySelector('#app');
const linksMenu = document.querySelectorAll('nav a');
const botaoContraste = document.querySelector('#alternar-contraste');

function atualizarMenuAtivo() {
    const rotaAtual = window.location.hash || '#/inicio';

    linksMenu.forEach(link => {
        const linkAtivo = link.getAttribute('href') === rotaAtual;

        if (linkAtivo) {
            link.classList.add('ativo');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('ativo');
            link.removeAttribute('aria-current');
        }
    });
}

function renderizarRegistros() {
    const container = document.querySelector('#lista-registros');

    if (!container) {
        return;
    }

    const cadastros = window.storage.obterCadastros();

    if (cadastros.length === 0) {
        container.innerHTML = '<p>Nenhum cadastro foi realizado ainda.</p>';
        return;
    }

    container.innerHTML = cadastros
        .map(cadastro => `
            <article class="registro">
                <h3>${cadastro.nome}</h3>
                <p><strong>E-mail:</strong> ${cadastro.email}</p>
                <p><strong>Telefone:</strong> ${cadastro.telefone}</p>
            </article>
        `)
        .join('');
}

function configurarFormularioCadastro() {
    const formulario = document.querySelector('#form-cadastro');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', event => {
        event.preventDefault();

        const formularioValido = window.validacao.validarFormulario(formulario);

        if (!formularioValido) {
            return;
        }

        const cadastro = {
            nome: formulario.querySelector('#nome').value.trim(),
            email: formulario.querySelector('#email').value.trim(),
            telefone: formulario.querySelector('#telefone').value.trim()
        };

        window.storage.adicionarCadastro(cadastro);

        const mensagemSucesso = document.querySelector('#mensagem-sucesso');

        mensagemSucesso.textContent = 'Cadastro realizado com sucesso.';
        mensagemSucesso.classList.add('sucesso');

        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'success',
                title: 'Cadastro realizado!',
                text: 'Os dados foram salvos com sucesso no navegador.',
                confirmButtonText: 'OK'
            });
        }

        formulario.reset();
    });
}

function atualizarFocoDaRota() {
    const tituloPrincipal = app.querySelector('h2');

    if (!tituloPrincipal) {
        return;
    }

    tituloPrincipal.setAttribute('tabindex', '-1');
    tituloPrincipal.focus();
}

function atualizarBotaoContraste() {
    const contrasteAtivo = document.body.classList.contains('alto-contraste');

    botaoContraste.setAttribute(
        'aria-pressed',
        contrasteAtivo ? 'true' : 'false'
    );

    botaoContraste.textContent = contrasteAtivo
        ? 'Desativar alto contraste'
        : 'Ativar alto contraste';
}

function carregarPreferenciaContraste() {
    const contrasteSalvo = localStorage.getItem('altoContraste');

    if (contrasteSalvo === 'true') {
        document.body.classList.add('alto-contraste');
    }

    atualizarBotaoContraste();
}

function configurarModoContraste() {
    botaoContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');

        const contrasteAtivo =
            document.body.classList.contains('alto-contraste');

        localStorage.setItem(
            'altoContraste',
            contrasteAtivo.toString()
        );

        atualizarBotaoContraste();
    });
}

function carregarRota() {
    const rota = window.location.hash || '#/inicio';
    const template = window.templates[rota] || window.templates['#/404'];

    app.innerHTML = template();

    atualizarMenuAtivo();
    configurarFormularioCadastro();
    renderizarRegistros();
    atualizarFocoDaRota();
}

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        atualizarMenuAtivo();
    });
});

window.addEventListener('hashchange', carregarRota);

window.addEventListener('DOMContentLoaded', () => {
    carregarPreferenciaContraste();
    configurarModoContraste();
    carregarRota();
});