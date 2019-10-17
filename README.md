# Demonstração de Sistemas de Informação

Implementação do projeto final de Sistemas de Informação (2019/2), o gerenciador da sua vida acadêmica na UnB.

## Pré-requisitos

1. Versão atualizada do npm e node.js. [Como fazer isso?](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Versão atualizada do expo-cli `npm install -g expo-cli`

1. App "Expo" instalado no celular <img src="https://lh3.googleusercontent.com/Bn-9LhsZ1P0z-ob_4pwvTF3aucymAzk6uqG7QIPkM7oo_ADkF1TJu_zJdxJswpkfU3Y=s180-rw" alt="Expo Logo" width="20px" height="20px">

<!-- ![Expo Logo](https://lh3.googleusercontent.com/Bn-9LhsZ1P0z-ob_4pwvTF3aucymAzk6uqG7QIPkM7oo_ADkF1TJu_zJdxJswpkfU3Y=s180-rw) -->

## Setup

Usando o terminal dentro do diretório escolhido, execute os seguintes comandos:

1. Clonar projeto do Git: `git clone https://github.com/TheKipmaster/demo_si.git`

1. Entre no diretório criado: `cd ./demo_si`

1. Instale as dependências do projeto: `npm install`

1. Inicialize o servidor: `npm start`

1. Já na página aberta no browser, conecte seu celular escaneando o QR code (se não funcionar, altere o tipo de conexão logo acima do QR code)

1. Fim

## Divisão de Tarefas

Cada um tem as seguintes telas para implementar:

* Rafael:
  * Lista de anúncios do mercado de pulgas;
  * Página com detalhes de um anúncio;

* Matheus:
  * Perfil;
  * Linha do tempo;

* Felippe:
  * Formulário de novo anúncio;
  * Formulário de novo evento;

* Danilo:
  * Meus anúncios;

Nada precisa funcionar além da navegação entre páginas, ou seja, todo o conteúdo é estático.

O repositório tem alguns componentes de uso geral em `/src/components/common`, lembrem de ver lá o que pode ser útil.

Sempre que a professora der tempo no fim da aula (ou toda quarta-feira, se ela não der) a gente vai fazer um check-in pra saber o que cada um fez até o momento.

## Branches

Cada um vai trabalhar em uma branch separada, como é o normal. Criem uma branch com seus respectivos nomes e prestem atenção para só trabalharem nela.

Uma vez que o projeto já estiver funcionando, para criar uma nova branch basta digitar no terminal `git checkout -b nome-da-branch`

*Se alguém precisar tirar alguma dúvida sobre o git, aqui tem um [guia do GitHub](https://try.github.io/)*

Toda sexta-feira as branches serão unidas, então tentem não esquecer de dar *push* em tudo até lá.