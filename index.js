let literalClick = document.getElementById('literalClick')
let objectClick = document.getElementById('objectClick')
let newClick = document.getElementById('newClick')
let classClick = document.getElementById('classClick')
let factoryClick = document.getElementById('factoryClick')

literalClick.addEventListener('click', animal.myColorAlert.bind(animal))
objectClick.addEventListener('click', dog.myColorAlert.bind(dog))
newClick.addEventListener('click', boy.myColorAlert)
classClick.addEventListener('click', kiwi.myWeightAlert.bind(kiwi))
factoryClick.addEventListener('click', lanos.myColorAlert)

let arr = [1, 2, 3]

const newArr = arr.map((v, i, a) => {
    console.log(v, i, a)
    return v-=1
})
console.log(arr, newArr)

