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

    if(!title || !userId || isNaN(userId)){
       return res.status(400).send({message: "erro 400", err: "Requisição Inválida"})
    }

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
    // res.send(tasks.find(task => task.id 
    //     === parseInt(req.params.id)))
    try{
        const data = await repository.get(parseInt(req.params.id))
        if(data){
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
        
    } catch (e) {
        res.status(500).send({message: "erro 500", err: e})
    }    
}

exports.put = async (req, res) => {
    const { title, completed, createdAt, updatedAt, id, userId } = req.body

    const newTask = { 
        title, 
        completed,
        createdAt,
        updatedAt,
        id: parseInt(req.params.id),
        userId }

        const values = Object.values(newTask) 

        
        if(values.some( v => v === undefined )) {
            return res.status(400).send({message: "erro 400", err: "Requisição Inválida"})
        }

try {

    const data = await repository.put(newTask, req.params.id)
    if(data){
        res.status(200).send(data)
    } else {
        res.status(404).end()
    }
    

}catch(e){
    res.status(500).send({message: "erro 500", err: e})
}

}

exports.patch = async (req, res) => {
    const { title, completed, userId } = req.body
    try {
        const data = await repository.patch({ title, completed, userId}, req.params.id)
        if(data){
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
       
    } catch (error) {
        res.status(500).send({message: "erro 500", err: e})        
    }


}

exports.delete = async (req, res) => {
    try {
        const data = await repository.delete(req.params.id)
        if(data){
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
    } catch (error) {
        res.status(500).send({message: "erro 500", err: e})
    }
    res.send(deletedTask)
}