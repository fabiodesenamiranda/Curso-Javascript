type Callback <T = any> = (data: T) => void

type Output = {
    data?: any,
    type: string
}

export class PubSub {
    static subscribers = {}

    static subscribe(eventName: string, fn: Callback){
        PubSub.subscribers[eventName] = PubSub.subscribers[eventName] || []
        PubSub.subscribers[eventName].push(fn)
    }
}

static publish(eventName: string, data: any){
    if(PubSub.subscribers[eventName]){
        PubSub.subscribers[eventName].forEach((fn: Function) =>{
            const output : Output = { data, type: eventName}
            fn(output)
        })
    }

}

static unsubscribe(eventName: string, fn: Callback){
    if(PubSub.subscribers[eventName]){
        const index = PubSub.subscribers[eventName].findIndex((element: Function) => element === fn)
        if(index > -1){
            PubSub.subscribers[eventName].splice(index,1)
        }
    }
}