export default (name) => {
    console.log(`hello ${name}`)
}

const topla = (a, b) => a + b

const cikar = (a, b) => a - b

const text = 'Text'

const user = {
    name: 'Yasin',
    surname: 'Arslan',
}

const users = [{
    name: 'Ahmet',
    surname: 'Tarık'
}, {
    name: 'Tayfun',
    surname: 'Erbilen'
}]

export{topla, cikar, text, user, users}