const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

// Habilitar o middleware 'cors' para permitir requisições de origens diferentes
app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const db = new sqlite3.Database('tarefas.db', (err) => {
  if (err) {
    console.error('Erro ao criar o banco de dados:', err);
    return;
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed BOOLEAN DEFAULT FALSE
    )
  `, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela:', err);
    } else {
      app.get('/', (req, res) => {
        res.redirect('/api/tasks');
      });
      app.use('/api', taskRoutes);
    }
  });
});