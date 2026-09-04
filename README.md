\# Experiência Prática IV - Versionamento e Acessibilidade



Projeto desenvolvido para a disciplina de Desenvolvimento Front-End, dando continuidade à aplicação criada na Experiência Prática III.



Nesta etapa, o objetivo é aplicar boas práticas de versionamento com Git e GitHub, organizar o fluxo de desenvolvimento utilizando branches, issues, milestones e pull requests, além de implementar melhorias de acessibilidade com base nas diretrizes WCAG 2.1 nível AA.



\## Funcionalidades



A aplicação possui:



\- Navegação no formato SPA (Single Page Application).

\- Renderização dinâmica de conteúdo com JavaScript.

\- Formulário de cadastro.

\- Validação dos campos do formulário.

\- Armazenamento dos cadastros utilizando localStorage.

\- Exibição dos registros armazenados.

\- Mensagens de confirmação utilizando SweetAlert2.

\- Tratamento de rotas inexistentes com página 404.

\- Destaque visual do item ativo no menu.

\- Foco visual para navegação utilizando teclado.



\## Tecnologias utilizadas



\- HTML5: estrutura e conteúdo da aplicação.

\- CSS3: estilização, layout e indicadores visuais de acessibilidade.

\- JavaScript: interatividade, navegação SPA, validação e manipulação do DOM.

\- localStorage: persistência dos dados no navegador.

\- SweetAlert2: exibição de mensagens de confirmação.

\- Git: controle de versão local.

\- GitHub: hospedagem do repositório e gerenciamento de branches, issues, milestones, releases e pull requests.



\## Estrutura do projeto



```text

Projeto 3/

├── CSS/

│   └── style.css

├── HTML/

│   └── index.html

├── JS/

│   ├── app.js

│   ├── storage.js

│   ├── templates.js

│   └── validacao.js

├── .gitignore

└── README.md



\## Como executar o projeto localmente



Este projeto utiliza HTML, CSS e JavaScript puro, portanto não necessita de instalação de dependências ou de processo de build.



Passo a passo:



1\. Clone o repositório:

&#x20;  ```bash

&#x20;  git clone https://github.com/williannascto/experiencia-pratica-4-versionamento-e-acessibilidade.git

&#x20;  ```



2\. Acesse a pasta do projeto.



3\. Abra o arquivo `HTML/index.html` em um navegador web.



4\. Utilize o menu da aplicação para navegar entre as páginas Início, Cadastro e Registros.



\## Versionamento



O projeto utiliza Git e GitHub para controle de versão. A organização das branches segue uma estratégia baseada no GitFlow:



\- `main`: versão estável do projeto.

\- `develop`: branch de integração e desenvolvimento.

\- `feature/acessibilidade`: desenvolvimento das melhorias de acessibilidade.

\- `feature/documentacao`: desenvolvimento da documentação técnica e do README.



Os commits seguem o padrão Conventional Commits, utilizando prefixos como `feat:`, `fix:`, `docs:` e `chore:` de acordo com o tipo de alteração.



\## Issues, Milestones e Pull Requests



O acompanhamento das atividades é realizado por meio das funcionalidades do GitHub.



\- As Issues são utilizadas para registrar e acompanhar melhorias e tarefas.

\- Os Milestones agrupam atividades relacionadas a uma etapa do projeto.

\- Os Pull Requests são utilizados para revisar e integrar alterações entre branches.

\- A Issue #1 registra as melhorias de acessibilidade conforme as diretrizes WCAG 2.1 nível AA.

\- O milestone "Experiência Prática IV - Acessibilidade" organiza as atividades relacionadas às melhorias de acessibilidade.



\## Acessibilidade



O projeto está sendo revisado com base nas diretrizes WCAG 2.1 nível AA.



Entre as melhorias previstas e implementadas estão:



\- Navegação utilizando teclado.

\- Indicadores visuais de foco.

\- Revisão da estrutura semântica da aplicação.

\- Melhor identificação de elementos para tecnologias assistivas.

\- Melhorias de acessibilidade nos campos e mensagens do formulário.

\- Testes de navegação por teclado.



\## Autor



Willian Nunes

