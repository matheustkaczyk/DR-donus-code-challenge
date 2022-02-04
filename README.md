# DR-donus-code-challenge

Desafio técnico para a empresa Digital Republic, construiu-se uma API de operações bancárias, onde se pode criar uma conta, efetuar depósitos e transferências entre clientes.

Para iniciar o API você deve:
1. Clonar o repositório
* `git@github.com:matheustkaczyk/DR-donus-code-challenge.git`
* Entre na pasta que você acabou de clonar
* `cd DR-donus-code-challenge`

2. Instale as dependências e inicializa a API:
* Instalando as dependências
* `npm install`
* Inicializando o projeto
* `npm start`

# ENDPOINTS
1. Criação de usuário
`POST /client`

* Payload
`
Ex: 
{
  "fullName": "Joao Teste",
  "cpf": "12345678901"
}
`

2. Login do usuário
`POST /login`

* Payload
`
Ex: 
{
  "fullName": "Joao Teste",
  "cpf": "12345678901"
}
`

3. Depósito
`POST /client/*quantidade*`

* Payload
`Ex: /client/2000`

4. Transferência
`POST /client/*quantidade*/*cpfAlvo*`

* Payload
`Ex: /client/2000/12345678901`
