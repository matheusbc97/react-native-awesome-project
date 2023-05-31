# stone-challenge

## Framework e Tecnologias Utilizadas

### Principais Tecnologias

Neste Projeto foi utilizado o **Expo v48**, junto com o **react-navigation v6.1.6**.

O Gerenciador de pacotes utilizado foi o **yarn v1.22.18** e o node v16.5.0

## Instalando as dependências

Antes de rodar o projeto instale as dependências com `yarn`(recomendado),  `npm i`,  ou o gerenciador de pacotes de sua preferência.

## Rodando o projeto

Execute o comando  `yarn start` ou `npm run start`.

## Rodando testes

Execute o comando `yarn test` ou `npm run test`.

## Rodando documentação com storybook

Execute o comando `yarn start-docs` ou `npm start-docs`


### Alterando documentação
Para alterar a documentação utilize o comando `yarn storybook-watch` ou `npm storybook-watch` antes de rodar o projeto

## Estrutura do projeto

### Pasta core
Na pasta core, estão os arquivos que são utilizados apenas uma vez no app como componentes (header, etc), navegação, providers, stores, etc. 

### Pasta shared
Aqui estão todos os arquivos que são compartilhados, ou seja que utilizados em diversas partes do app. Alguns exmplos são componentes, hooks, services, etc.  

### Pasta screens
Aqui estão as telas do app

## Formatação dos commits
Os commits devem ser feitos no seguinte formato: `<type>(<scope>): <subject>` onde `<scope>` é opcional

`feat`: (nova funcionalidade para o usuário, não uma nova funcionalidade para o script de build).   
`fix`: (correção de bug para o usuário, não uma correção para o script de build).  
`docs`: (alterações na documentação).  
`style`: (formatação, ponto e vírgula faltando, etc; sem alteração de código de produção).  
`refactor`: (refatoração de código de produção, por exemplo, renomeando uma variável).  
`test`: (adição de testes faltantes, refatoração de testes; sem alteração de código de produção).  
`chore`: (Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.).  
`perf`: Uma alteração de código que melhora o desempenho;  
`ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs);  
`build`: Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm)  
`env`: basicamente utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.  

## Considerações Finais
Fazer um aplicativo de qualidade demora um bom e tempo por isso, não realizei testes em tudo e nem documentei tudo, mas fiz aquilo que julguei ser o suficiente para avaliarem meu trabalho.  
Espero que gostem do desafio que foi feito e tudo dando certo espero entrar para o time stone.
Desde já agradeço pela oportunidade