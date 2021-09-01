const json = [
    {
        nome: 'João',
        genero: 'Masculino'
    },
    {
        nome: 'Maria',
        genero: 'Femino'
    },
    {
        nome: 'Fernanda',
        genero: 'Femino'
    },
    {
        nome: 'Gustavo',
        genero: 'Masculino'
    },
]

var btn = document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()
    const randomElement = json[Math.floor(Math.random() * json.length)].nome;
    let textBarLastName = document.querySelector('#lastName')
    let txt = textBarLastName.value
    // console.log(txt)
    const textBarName = document.querySelector('#resultName');
    textBarName.setAttribute('value', `${randomElement} ${txt}`)
    // console.log(textBarName)
});