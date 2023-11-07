const _set = new Set()
const _weakset = new WeakSet()

const arr = [1, 2, 3, 4, 2, 3, 5]

_set.add(1)
_set.add(2)
_set.add(3)
_set.add(2)
_set.add(6)


console.log(_set.has(6))
_set.delete(6)
console.log(_set.size)
console.log(_set.has(6))
for(let el of _set)
console.log(el)


;(function () {
    let obj1 = {foo: "bar"}
    let obj2 = {foo2: "bar2"}
    _set.add(obj1)
    _weakset.add(obj2)
})()

