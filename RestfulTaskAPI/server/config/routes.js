const task = require('../controllers/tasks.js');

module.exports = function(app) {
app.get('/tasks', (req, res)=>{ // get all tasks
    task.index(req,res);
})

app.get('/tasks/:id', (req, res)=>{     // get a task by id
    task.display(req, res);
})

app.post('/tasks', (req, res)=>{       // create a task
    task.create(req, res);
})

app.put('/tasks/:id', (req, res)=> {       // update a task
    task.update(req, res);
})

app.delete('/tasks/:id', (req, res)=>{      // delete a task
    task.delete(req, res);
})
};