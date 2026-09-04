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
        <section aria-labelledby="titulo-inicio">
            <h2 id="titulo-inicio">Início</h2>
            <p>Bem-vindo à Experiência Prática 3.</p>

            <h3>Recursos da aplicação</h3>

            <div class="lista-recursos">
                ${gerarRecursos()}
            </div>
        </section>
    `,

    '#/cadastro': () => `
        <section aria-labelledby="titulo-cadastro">
            <h2 id="titulo-cadastro">Cadastro</h2>
            <p id="instrucao-cadastro">
                Preencha os dados abaixo para realizar o cadastro.
            </p>

            <form
                id="form-cadastro"
                novalidate
                aria-describedby="instrucao-cadastro"
            >

                <div class="campo-formulario">
                    <label for="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        autocomplete="name"
                        required
                        aria-required="true"
                    >
                </div>

                <div class="campo-formulario">
                    <label for="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        autocomplete="email"
                        required
                        aria-required="true"
                    >
                </div>

                <div class="campo-formulario">
                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        autocomplete="tel"
                        required
                        aria-required="true"
                    >
                </div>

                <button type="submit">
                    Cadastrar
                </button>

                <p
                    id="mensagem-sucesso"
                    aria-live="polite"
                    aria-atomic="true"
                ></p>
            </form>
        </section>
    `,

    '#/registros': () => `
        <section aria-labelledby="titulo-registros">
            <h2 id="titulo-registros">Registros</h2>
            <p>Cadastros armazenados no navegador:</p>

            <div
                id="lista-registros"
                aria-live="polite"
            ></div>
        </section>
    `,

    '#/404': () => `
        <section aria-labelledby="titulo-404">
            <h2 id="titulo-404">Página não encontrada</h2>
            <p>A rota informada não existe.</p>
        </section>
    `
};