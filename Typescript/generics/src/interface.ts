interface Action<T = string> {
    action: T
}

const step1: Action<number> = {
    action: 0
}

step1.action = 20

const step2: Action<boolean> = {
    action: true
}

const step3: Action = {
    action: "string"
}

type NumberOrString = number | string
interface ActionI<T extends NumberOrString = string, U = number>{
    action: T,
    timestamp: U
}

const step4: ActionI = {
    action: "delete",
    timestamp: 123
}

const historyActions : Array<ActionI> = []

const addAction = <T extends ActionI>(obj: T) => {
    console.log("addAction")
    console.log(obj)
    historyActions.push(obj)
}

addAction({
    action: "delete",
    timestamp: 123,
    teste: "ola"
})

console.log(historyActions)


export default "teste"