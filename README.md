# React
Aprendendo React

## O que é React ?

* Uma Blioteca JS para criação de interfaces;
* Utilizado para construir SPAs(Single Page Application);
* Baseado em Componentes;
* Utiliza o JSX para renderizar HTML;
* E aplica o Vistual DOM para realizar as alterações de DOM
* Podemos Adicionar a um projeto ou criar um projeto com ele;

## Como instalar o React?

* Para instalar o React vamos utilizar uma ferramenta chamada Create React App;
* Recebemos todos os arquivos da biblioteca e temos como executa-la;
* Para utilizar precisamos do Node e tambem NPM;
* Esta ferramenta tambem otimza o app gerado para a produção;
* É possivel inicial a aplicação com npm start;

npm create vite@latest meu-projeto -- --template react

## Entendendo o JSX

* O JSX é como um HTML, porém dentro do código JavaScript;
* É a principal maneira de escrever HTML com o React;
* Podemos interpolar variaveis, inserindo ela entre {};
* É possivel tambem executar funçoes em JSX;
* Inserir valores em atributos de tags tambem é validos em JSX;

## Componentes

* Permite dividir a aplição em partes;
* Os componentes renderizam JSX, assim como App.js (que é um componente);
* Precisamos criar um arquivo de componente;
* E importa-lo onde precisamos utilizar;
* Normalmente ficam em uma pasta chamada compenents;

## Props

* As Props são valores passados para componentes;
* podemos deixa-los dinamicos;
* Ou seja, mudando a execução por causa do valor da prop;
* O valor é passado como um atributo na chamada do componente;
* E precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente;
* As props são somente de leitura!;