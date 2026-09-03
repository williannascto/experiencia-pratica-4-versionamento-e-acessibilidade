const CHAVE_STORAGE = 'cadastros';

function obterCadastros() {
    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);

    if (!dadosSalvos) {
        return [];
    }

    return JSON.parse(dadosSalvos);
}

function salvarCadastros(cadastros) {
    localStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(cadastros)
    );
}

function adicionarCadastro(cadastro) {
    const cadastros = obterCadastros();

    cadastros.push(cadastro);

    salvarCadastros(cadastros);
}

window.storage = {
    obterCadastros,
    salvarCadastros,
    adicionarCadastro
};