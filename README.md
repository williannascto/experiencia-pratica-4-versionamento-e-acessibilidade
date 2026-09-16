# Experiência Prática IV - Versionamento e Acessibilidade

Projeto desenvolvido para a disciplina de Desenvolvimento Front-End, dando continuidade à aplicação criada na Experiência Prática III.

Nesta etapa, o objetivo é aplicar boas práticas de versionamento com Git e GitHub, organizar o fluxo de desenvolvimento utilizando branches, issues, milestones e pull requests, além de implementar melhorias de acessibilidade com base nas diretrizes WCAG 2.1 nível AA.

## Funcionalidades

A aplicação possui:

- Navegação no formato SPA (Single Page Application).
- Roteamento baseado em hash.
- Renderização dinâmica de conteúdo com JavaScript.
- Formulário de cadastro.
- Validação dos campos do formulário.
- Armazenamento dos cadastros utilizando localStorage.
- Exibição dos registros armazenados.
- Mensagens de confirmação utilizando SweetAlert2.
- Tratamento de rotas inexistentes com página 404.
- Destaque visual do item ativo no menu.
- Identificação da página atual com `aria-current`.
- Foco direcionado ao conteúdo principal após mudança de rota.
- Foco visual para navegação utilizando teclado.
- Modo de alto contraste.

## Tecnologias utilizadas

- HTML5: estrutura e conteúdo da aplicação.
- CSS3: estilização, layout e indicadores visuais de acessibilidade.
- JavaScript: interatividade, navegação SPA, validação e manipulação do DOM.
- localStorage: persistência dos dados no navegador.
- SweetAlert2: exibição de mensagens de confirmação.
- Vite: preparação, otimização e geração do build de produção.
- Git: controle de versão local.
- GitHub: hospedagem do repositório e gerenciamento de branches, issues, milestones, releases e pull requests.
- GitHub Actions: automação do processo de build e deploy.
- GitHub Pages: hospedagem da aplicação em ambiente de produção.

## Estrutura do projeto

```text
experiencia-pratica-4-versionamento-e-acessibilidade/
├── .github/
│   └── workflows/
├── CSS/
├── HTML/
├── Images/
├── JS/
│   ├── app.js
│   ├── main.js
│   ├── storage.js
│   ├── templates.js
│   └── validacao.js
├── .gitignore
├── README.md
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Como executar o projeto localmente

Para executar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/williannascto/experiencia-pratica-4-versionamento-e-acessibilidade.git
```

2. Acesse a pasta do projeto:

```bash
cd experiencia-pratica-4-versionamento-e-acessibilidade
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação poderá ser acessada pelo endereço informado pelo Vite no terminal.

Para gerar a versão otimizada para produção:

```bash
npm run build
```

## Roteamento da SPA e compatibilidade com GitHub Pages

A aplicação utiliza uma arquitetura SPA (Single Page Application) com roteamento baseado em hash (`#`).

O roteamento é implementado em JavaScript por meio de `window.location.hash`. A aplicação identifica a rota atual e renderiza dinamicamente o conteúdo correspondente sem realizar o carregamento completo de uma nova página.

Exemplo de rota utilizada pela aplicação:

```text
#/inicio
```

No arquivo `main.js`, a rota atual é identificada por meio de:

```javascript
const rota = window.location.hash || '#/inicio';
```

A aplicação também utiliza o evento `hashchange` para detectar mudanças na rota e carregar o conteúdo correspondente:

```javascript
window.addEventListener('hashchange', carregarRota);
```

Essa estratégia foi escolhida principalmente pela compatibilidade com o GitHub Pages.

Como o GitHub Pages funciona como uma hospedagem estática, ele não possui, por padrão, uma configuração de servidor para redirecionar todas as rotas de uma SPA para o arquivo `index.html`.

No roteamento baseado em hash, tudo o que aparece após o caractere `#` é interpretado pelo navegador e não é enviado ao servidor como um novo caminho.

Dessa forma, ao atualizar a página por meio de refresh ou acessar diretamente um link que contém uma rota da aplicação, o navegador continua carregando o arquivo principal e o JavaScript identifica o conteúdo que deverá ser exibido.

Essa abordagem facilita o funcionamento da SPA no GitHub Pages e reduz a possibilidade de erros de página não encontrada em produção.

### Alternativa utilizando History API

Uma alternativa seria utilizar a History API do navegador, por meio de recursos como:

```javascript
history.pushState()
```

Nesse modelo, poderiam ser utilizadas URLs sem o caractere `#`, como:

```text
/cadastro
```

em vez de:

```text
#/cadastro
```

Entretanto, em uma SPA utilizando History API, ao acessar diretamente uma rota como `/cadastro` ou atualizar a página nessa rota, o servidor tentaria localizar esse caminho diretamente.

Para evitar erros, seria necessário configurar um fallback ou rewrite no servidor, direcionando todas as rotas para o arquivo `index.html`.

Como o GitHub Pages é uma hospedagem estática e não oferece esse tipo de configuração de servidor de forma nativa, foi adotado o roteamento baseado em hash.

A escolha prioriza:

- compatibilidade com o GitHub Pages;
- funcionamento correto após refresh;
- suporte a links diretos;
- simplicidade de configuração;
- menor dependência de configurações específicas de servidor;
- maior previsibilidade do deploy em produção.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão.

A organização das branches segue uma estratégia baseada no GitFlow:

- `main`: versão estável do projeto e utilizada em produção.
- `develop`: branch de integração e desenvolvimento.
- `feature/acessibilidade`: desenvolvimento das melhorias de acessibilidade.
- `feature/documentacao`: desenvolvimento da documentação técnica e do README.
- Outras branches `feature/*` são utilizadas para desenvolvimento de funcionalidades e melhorias específicas.

Os commits seguem o padrão Conventional Commits, utilizando prefixos de acordo com o tipo de alteração:

- `feat:` para novas funcionalidades.
- `fix:` para correções.
- `docs:` para documentação.
- `build:` para alterações relacionadas ao processo de build.
- `ci:` para integração e deploy contínuos.
- `chore:` para tarefas de manutenção.

## Issues, Milestones e Pull Requests

O acompanhamento das atividades é realizado por meio das funcionalidades do GitHub.

- As Issues são utilizadas para registrar e acompanhar melhorias e tarefas.
- Os Milestones agrupam atividades relacionadas a uma etapa do projeto.
- Os Pull Requests são utilizados para revisar e integrar alterações entre branches.
- A Issue #1 registra as melhorias de acessibilidade conforme as diretrizes WCAG 2.1 nível AA.
- O milestone "Experiência Prática IV - Acessibilidade" organiza as atividades relacionadas às melhorias de acessibilidade.

Esse fluxo permite manter rastreabilidade entre planejamento, desenvolvimento, revisão e integração das alterações.

## Acessibilidade

O projeto foi revisado com base nas diretrizes WCAG 2.1 nível AA.

Entre as melhorias implementadas estão:

- Navegação utilizando teclado.
- Indicadores visuais de foco.
- Revisão da estrutura semântica da aplicação.
- Melhor identificação de elementos para tecnologias assistivas.
- Uso de `aria-current` para indicar a página atual.
- Uso de `aria-pressed` no controle de alto contraste.
- Gerenciamento de foco após alterações de rota.
- Melhorias de acessibilidade nos campos e mensagens do formulário.
- Validação acessível dos campos.
- Testes de navegação por teclado.
- Modo de alto contraste.

## Build e otimização

O projeto utiliza Vite para preparação e geração do build de produção.

Durante o processo de build, os arquivos da aplicação são preparados e otimizados para publicação, contribuindo para melhor desempenho no ambiente de produção.

O build é gerado utilizando:

```bash
npm run build
```

## Publicação e deploy

A aplicação é publicada no GitHub Pages.

O processo de deploy é automatizado por meio do GitHub Actions e integrado ao repositório no GitHub.

Quando as alterações destinadas à produção são integradas à branch `main`, o workflow configurado executa o processo de build e publicação da versão atualizada da aplicação.

Essa automação permite que o deploy seja:

- reproduzível;
- rastreável;
- integrado ao controle de versão;
- menos sujeito a erros manuais.

A utilização do GitHub Pages também permite que o código-fonte, o histórico de alterações e o ambiente publicado permaneçam vinculados ao mesmo projeto.

## Autor

Willian Nunes
