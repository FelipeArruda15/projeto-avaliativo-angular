# Proavang
Este é um projeto desenvolvido no programa de formação PubFuture, com o objetivo na prática do framework Angular. <br>
Proavang é um nome fictício criado para apresentação do site. <br> <br>

## Tecnologias, Frameworks e Bibliotecas
### [Node.JS](https://nodejs.org/en/) <br>
Utilizado para execução do JS fora do navegador

### [npm](https://www.npmjs.com/) <br>
Gerenciador de pacotes para o Node.JS

### [Angular](https://angular.io/start) <br>
Framework utilizado para criação do front-end de aplicações web

### [Bootstrap](https://getbootstrap.com/) <br>
Framework front-end que facilita na criação de componentes

### [Json-Server](https://www.npmjs.com/package/json-server) <br>
Biblioteca que simula uma rest API, utilizando um arquivo .json como banco de dados

### [Git](https://git-scm.com/) <br>
Sistema de versionamento utilizado no projeto
<br> <br>

## Como Executar?

 - Antes de iniciar, você precisará ter o [Node.JS](https://nodejs.org/en/) e o [Git](https://git-scm.com/) instalados em seu computador;
 - Com tudo instalado, abra o terminal do seu computador na pasta em que deseja ter o projeto;
 - Após isto, clone o projeto utilizando o seguinte comando:
```bash
git clone https://github.com/viniciusleitempergher/projeto-avaliativo-angular.git
```
 - Feito isto, vamos executar o backend da aplicação. Para isso, no mesmo terminal do comando anterior acesse a pasta do backend com o comando:
```bash
cd projeto-avaliativo-angular/backend
```
 - Agora, instale as dependências do projeto com o comando:
```bash
npm i
```
 - Inicie o servidor do backend utilizando o comando:
```bash
npx json-server usuarios.json
```
 - Com o servidor do backend funcionando, podemos iniciar nosso frontend. Para isso, vamos abrir outro terminal na pasta do projeto e acessar a pasta do frontend com o comando:
```bash
cd frontend
```
 - Neste momento, iremos instalar as dependencias do frontend utilizando o comando:
```bash
npm i
```
 - Depois de ter instalado, podemos iniciar nosso servidor com:
```bash
npm start
```
 - Se tudo estiver ok, você poderá acessar o sistema através da url: http://localhost:4200/cadastrar
