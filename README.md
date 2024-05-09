# Projeto consumo da api rick and morty
@guilhermesantos
## Introdução
Projeto focado no consumo da API Rick and Morty com desenvolvimento em SPA [Single Page Application]. tem como modelo uma dashboard com listas de personagens, opção de favoritos, lista de episódios e detalhes dos personagens, ao clicar na opção mais.

## Login
Implementada uma tela genérica de login, solicitando email e senha. Foi utilizado mocks para criar o processo de autenticação.
Informações de Login estão dispostas no item abaixo com o tópico de ```Acesso```.



## Credenciais de Acesso
- **Email:** teste@teste.com
- **Senha:** abcd

## Layout
O layout da aplicação foi usado pesquisas externas para maior compreensão, para que fosse intuitiva e de fácil uso. Junto dela foi usada Bootstrap para estilizar garantindo responsividade.
## Funcionalidades


### Listagem e Detalhes
O aplicativo possui uma página de lista que exibe os personagens da série. Ao clicar em um item da lista, os usuários são direcionados para uma página de detalhes onde podem obter informações mais específicas sobre a função selecionada.

### Paginação
Implementei uma funcionalidade de paginação por meio de scroll infinito, proporcionando uma navegação mais fácil e eficiente pelos diversos personagens disponíveis.
Junto disso na parte de episódios temos botões para guiar para páginas seguintes para melhor entendimento.


### Barra de Pesquisa
A barra de pesquisa é um recurso global do aplicativo e aparece apenas na página da lista. Esta coluna permite aos usuários filtrar a lista ativa, fornecendo uma maneira rápida de encontrar caracteres específicos. A pesquisa permanece consistente em todas as listagens implementadas.

### Persistência de Filtragem
Os filtros da barra de pesquisa permanecem ativos ao alternar de uma lista para outra. Isso significa que novas listas já serão carregadas filtradas com base nos termos de pesquisa, proporcionando transições suaves entre diferentes partes do aplicativo.

### Carregamento do Esqueleto dos Cartões
O carregamento esqueleto foi criado para melhorar a experiência do usuário ao carregar cartões. Eles fornecem uma representação visual dos elementos que estão sendo carregados, mantendo o layout organizado e fornecendo feedback visual ao usuário.


### Favoritar Personagens
Implementei um recurso adicional que permite ao usuário ter personagens favoritos. Os personagens favoritos são exibidos em uma lista separada, proporcionando aos usuários uma maneira conveniente de rastrear e revisitar seus personagens favoritos.

## Como Executar o Projeto

### Pré-requisitos para uso
Garanta que você tenha instalado o Angular CLI. Caso não saiba como instalar ou não possui instalado segue os seguintes comandos para instalação:

```bash
npm install -g @angular/cli
npm install Bootstrap
```

### Clone o Projeto/Repositório
```bash
git clone 
```

### Atualize as Dependências
No diretório raiz do projeto, execute o seguinte comando para obter todas as dependências necessárias:

```bash
npm install
```

### Execute o Projeto
Com as dependências atualizadas, você pode executar o aplicativo usando o seguinte comando:

```bash
ng serve
```
O aplicativo será compilado e estará disponível em http://localhost:4200/.

### Recursos Adicionais 

- Aqui estão alguns recursos e videos que utilizei para o desenvolvimento desse projeto:
- Angular: (https://angular.io/tutorial) 
- Angular: (https://angular.io/guide/quickstart)
# Videos de auxilio
- Domini Code: https://www.youtube.com/watch?v=hGU2ceM8aVY

### Documentação
- Aqui estou deixando um link para visualização de uma breve documentação e detalhes a mais sobre a aplicação.
(https://1drv.ms/w/c/7021c1e609aa8da2/ER-bZGDIZVdDkCqTxXIy-CQBFv_s0UxcaX05OpOEmGE8kQ?e=mg4MIX)


# Avaliação
Caso tenha interesse em ajudar a desenvolver a plataforma e criar novas funcionalidades, me envie um email: [emaildogbs@gmail.com].

- Se você não deseja enviar email mas deseja colaborar com esse trabalho faça os seguintes comandos.

```
git clone <Url-do-seu-fork>
git remote add upstream <Url-do-repositório-original>
git fetch upstream
git checkout main
git merge upstream/main
git checkout -b minha-nova-feature
git add .
git commit -m "Descrição das mudanças"
git push origin minha-nova-feature
```

