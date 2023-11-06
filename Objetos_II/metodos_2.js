const obj = {
    prop1: "prop 1",
    prop2: "prop 2"
}

const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}


Object.freeze(objFreeze)  // não pode criar, remover ou atualizar propriedades

Object.seal(objSeal) // não pode criar, pode atualizar, mas não pode remover propriedades

Object.preventExtensions(objPrevent) // // não pode criar, pode atualizar, pode remover propriedades