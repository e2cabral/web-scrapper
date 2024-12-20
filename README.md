## Guias de instalação
+ NVM: [Como instalar o node no Windows, Linux e macOS](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos)
+ GIT: [Como instalar o GIT no Windows, Linux e macOS](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
+ Ambiente WSL (opcional): [Como configurar o ambiente usando o WSL](https://medium.com/@filipeversehgi/como-eu-configuro-meu-ambiente-de-desenvolvimento-local-5abbb6b4e29)
  Obs: Não é necessário configurar `Azure Cli`, `Kubectl`, `Homebrew`, `GO`, `Python`, `K9s`, `Java` e `Cypress`.

## Obrigatório

Aqui vão algumas das recomendações obrigatórias sobre o projeto.

+ É necessário criar um fork do projeto e cloná-lo.
+ É necessário ter o ambiente configurado para começar a desenvolver.
+ Entender como funciona a sua IDE para configurar o projeto.
+ Saber o básico de programação.

## Como iniciar um projeto simples em Node (com typescript)

+ git init
+ npm init -y
+ npm i typescript
+ npm i ts-node-dev —save-dev
+ Criar arquivo `main.ts` com o seguinte conteúdo:
```ts
const main = () => {
  console.log('Hello World');
}

main();
```
+ Adicionar ao package.json
`"scripts": {  "start:dev": "tsnd --ignore-watch /node_modules --respawn --transpile-only src/main.ts"}`
+ echo "20" > .nvmrc
+ tsc —init
+ npm i eslint —save-dev
+ eslint --init (ou npx eslint --init)