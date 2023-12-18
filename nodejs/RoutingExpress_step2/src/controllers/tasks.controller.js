const tasks = require("./../../data/tasks.json")

const repository = require("./../repository/tasks.repository")

exports.get = async (req, res) => {
    try {
        let tasks = await repository.get
        res.status(200).send(tasks)
    } catch(e){
        res.status(500).send({message: "erro 500", err: e})
    }
}

exports.post = async (req, res) => {
    const { title, userId } = req.body

    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId,
    }

   // tasks.push(newTask)
   try {
    const data = await repository.post(newTask) 
    res.status(201).send(data)
   } catch(e){
    res.status(500).send({message: "erro 500", err: e})
}


}

exports.getById = async (req, res) => {
    res.send(tasks.find(task => task.id 
        === parseInt(req.params.id)))
}

exports.put = async (req, res) => {
    const { title, completed, createdAt, updatedAt, id, userId } = req.body
    const newTask = { title, completed, createdAt, updatedAt, id, userId }

    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))
    tasks.splice(taskIndex, 1, newTask)

    res.send(newTask)
}

exports.patch = async (req, res) => {
    const { title, completed, userId } = req.body
    const taskById = tasks.find(task => task.id === parseInt(req.params.id))
    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))

    const updatedAt = Date.now()

    const taskUpdated = { title, completed, userId, updatedAt }

    for (let prop in taskUpdated) {
        if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    const newTask = { ...taskById, ...taskUpdated }
    tasks.splice(taskIndex, 1, newTask)
    res.send(newTask)
}

exports.delete = async (req, res) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))

    const deletedTask = tasks.splice(taskIndex, 1)
    res.send(deletedTask)
}