const recursos = [
    {
        titulo: 'Navegação SPA',
        descricao: 'Atualização dinâmica do conteúdo sem recarregar toda a página.'
    },
    {
        titulo: 'Templates Dinâmicos',
        descricao: 'Geração de componentes reutilizáveis utilizando JavaScript.'
    },
    {
        titulo: 'Organização do Código',
        descricao: 'Separação das responsabilidades entre os arquivos da aplicação.'
    }
];

function gerarRecursos() {
    return recursos
        .map(recurso => `
            <article class="card">
                <h3>${recurso.titulo}</h3>
                <p>${recurso.descricao}</p>
            </article>
        `)
        .join('');
}

window.templates = {

    '#/inicio': () => `
        <section>
            <h2>Início</h2>
            <p>Bem-vindo à Experiência Prática 3.</p>

            <h3>Recursos da aplicação</h3>

            <div class="lista-recursos">
                ${gerarRecursos()}
            </div>
        </section>
    `,

    '#/cadastro': () => `
        <section>
            <h2>Cadastro</h2>
            <p>Preencha os dados abaixo para realizar o cadastro.</p>

            <form id="form-cadastro" novalidate>

                <div class="campo-formulario">
                    <label for="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                    >
                </div>

                <div class="campo-formulario">
                    <label for="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                    >
                </div>

                <div class="campo-formulario">
                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                    >
                </div>

                <button type="submit">Cadastrar</button>

                <p id="mensagem-sucesso"></p>
            </form>
        </section>
    `,

    '#/registros': () => `
        <section>
            <h2>Registros</h2>
            <p>Cadastros armazenados no navegador:</p>

            <div id="lista-registros"></div>
        </section>
    `,

    '#/404': () => `
        <section>
            <h2>Página não encontrada</h2>
            <p>A rota informada não existe.</p>
        </section>
    `
};