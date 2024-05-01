# Gerenciador de Tarefas

Este é um projeto de estudo para criar uma aplicação de gerenciamento de tarefas usando Node.js, Express.js e SQLite.

## Funcionalidades

- Listar todas as tarefas
- Criar uma nova tarefa
- Marcar uma tarefa como concluída
- Deletar uma tarefa

## Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite
- Biblioteca SQLite3
- Biblioteca Cors

## Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone o repositório do projeto.
3. Acesse o diretório do projeto pelo terminal.
4. Instale as dependências do projeto:
   ```
   npm install
   ```
5. Navegue até a pasta .\app.js Inicie o servidor:
   ```
   node app.js
   ```
6. O servidor estará rodando na porta `3000`.

## Rotas da API

- `GET /api/tasks`: Lista todas as tarefas
- `POST /api/tasks`: Cria uma nova tarefa
- `DELETE /api/tasks/:id`: Deleta uma tarefa
- `PATCH /api/tasks/:id/complete`: Atualiza o status da tarefa (concluída ou não)

## Observações

- Este é um projeto de estudo e não deve ser utilizado em ambientes de produção sem as devidas melhorias e testes.
- Sinta-se à vontade para contribuir, sugerir melhorias ou reportar problemas.
