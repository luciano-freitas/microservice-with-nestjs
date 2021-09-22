# Trabalhando com micro serviços com NestJs

## 📚 Descrição

Este repositório tem como objetivo demonstrar de uma forma simples e objetiva como trabalhar com micro serviços utilizando o framework NestJs integrado com algumas blibiotecas que agilizam no desenvolvimento, performance e documentação.


## 🔒 Variáveis de ambiente

Para que a aplicação rode perfeitamente, você precisará das seguintes variáveis de ambiente configurada no projeto

| Environment                 | Descrição                                                   | Valor Padrão |
|-----------------------------|-------------------------------------------------------------|--------------|
|API_GATEWAY_HOST             | Nome do host do servidor                                    | api-gateway  |
|API_GATEWAY_IP               | Endereço IP do Gateway                                      | 0.0.0.0      |
|API_GATEWAY_PORT             | Porta de acesso do Gateway                                  | 4000         |
|API_GATEWAY_SWAGGER_PREFIX   | Caminho para o uso da documentação pelo swagger             | /docs        |
|                             |                                                             |              |
|RMQ_USER                     | Usuário de acesso para o RMQ                                | guest        |
|RMQ_PASSWORD                 | Senha do usuário para o acesso ao RMQ                       | guest        |
|RMQ_PORT                     | Porta de acesso para a aplicação se conectar ao RMQ         | 5672         |
|RMQ_PORT_DASH                | Porta de acesso ao painel gerenciador do RMQ                | 15672        |
|RMQ_HOST                     | IP de acesso ou nome do host para o RMQ                     | rmq          |
|RMQ_VHOST_NAME               | Nome do VHOST dentro do RMQ                                 | micro        |
|                             |                                                             |              |
|DB_MONGODB_HOST              | IP de acesso ou nome do host do MongoDB                     | mongodb      |
|DB_MONGODB_USER              | Usuário de acesso para o MongoDB                            | root         |
|DB_MONGODB_PASSWORD          | Senha de acesso para o MongoDB                              | example      |
|DB_MONGODB_EXPRESS_PORT      | Porta para acesso ao painel gerenciador do MongoDB          | 8081         |
|                             |                                                             |              |
|DB_DYNAMODB_HOST             | IP de acesso ou o nome do host do DynamoDB                  | dynamodb     |
|DB_DYNAMODB_PORT             | Porta de acesso da aplicação ao DynamoDB                    | 8000         |
|DB_DYNAMODB_REGION           | Região onde se encontra o DynamoDB                          | us-east-1    |
|                             |                                                             |              |
|PLAYERS_HOST                 | IP de acesso ou o nome do host do micro serviço de Jogador  | players      |
|                             |                                                             |              |
|TEAMS_HOST                   | IP de acesso ou o nome do host do micro serviço de Time     | teams        |
|TEAMS_PORT                   | Porta para o acesso ao micro serviço de Time                | 4001         |

## 🛠️ Instalação

Você precisa ter instalado 
[Docker](https://www.docker.com/)


## 🏃 Para rodar a aplicação basta executar os seguintes comandos

```bash
# Docker
$ docker-compose up -d
```

## ✅ Atenção
Aguarde alguns segundos até que toda a aplicação suba corretamente

## 💡 Links disponiveis

Logo abaixo está a lista de todas as urls que ficarão disponiveis no seu navegador

```bash
# ApiGateway 
$ http://localhost:4000

# ApiGateway - Documentação
$ http://localhost:4000/docs

# DynamoDB 
$ http://localhost:8000/shell

# Mongo Express 
$ http://localhost:8081

# RabbitMQ
$ http://localhost:15672
```

## 🔦 Criação da Vhost no RabbitMQ

1º Entre com usuário e senha
2º Vá até a aba Admin
3º No lado direito terá uma opção chamada (Virtual Hosts)
4º Localize a opção "Add a new virtual host"
5º Informe o "Name" pode ser o mesmo que está na variavel de ambiente [RMQ_VHOST_NAME]
6º Clique no botão de "Add virtual host"