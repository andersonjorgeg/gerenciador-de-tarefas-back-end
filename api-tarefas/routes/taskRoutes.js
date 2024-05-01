const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('tarefas.db');

// Rota para listar todas as tarefas
router.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', (err, tasks) => {
    if(err) {
      console.error('Erro ao buscar tarefas:', err);
      res.status(500).send('Erro ao buscar tarefas');
    } else {
      res.json(tasks);
    }
  });
});

// Rota para criar uma nova tarefa
router.post('/tasks', (req, res) => {
  const { title } = req.body;
  db.run('INSERT INTO tasks (title) VALUES (?)', [title], (err) => {
    if(err) {
      console.error('Erro ao criar tarefa:', err);
      res.status(500).send('Erro ao criar tarefa');
    } else {
      res.status(201).send('Tarefa criada com sucesso');
    }
  });
});

// Rota para deletar uma tarefa
router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if(err){
      console.error('Erro ao deletar tarefa:', err);
      res.status(500).send('Erro ao deletar tarefa'); 
    } else {
      res.status(201).send('Tarefa deletada com sucesso');
    }
  })
})

// Rota para atualizar o status de uma tarefa
router.patch('/tasks/:id/complete', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.run('UPDATE tasks SET completed = ? WHERE id = ?', [completed, id], (err) => {
    if (err) {
      console.error('Erro ao atualizar o status da tarefa:', err);
      res.status(500).send('Erro ao atualizar o status da tarefa');
    } else {
      res.status(200).send('Status da tarefa atualizado com sucesso');
    }
  });
});

module.exports = router;