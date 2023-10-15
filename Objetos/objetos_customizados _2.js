function changeName(name){
    console.log(this)
    console.log(name) 
    this.name = name
    this.updatedAt = new Date()
}

changeName("fora de objeto")
const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updatedAd: null,
    completed: false,
    changeName: changeName
    }

const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updatedAd: null,
    completed: false
}

task1.name = "task 1 updated"
task1.updatedAt = new Date()

task1.changeName("nome atualizado")

console.log(task1)
console.log(task2)