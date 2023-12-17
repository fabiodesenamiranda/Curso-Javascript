const express = require("express")
const tasks = require("./data/tasks.json")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/tasks", (req, res) =>{
    res.send(tasks)
})

app.post("/tasks", (req, res) =>{
    console.log(req.body)
    const { title, userId } = req.body

    const newTask = {
        
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId,
        id: tasks[tasks.length -1 ].id + 1
    }
    
    tasks.push(newTask)
    res.send(newTask)
})


app.get("/tasks/9", req, res => res.send(tasks.filter(task => task.id === 9)))

app.listen(3001)