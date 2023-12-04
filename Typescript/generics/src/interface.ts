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

