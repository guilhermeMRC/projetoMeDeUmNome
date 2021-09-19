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
    {
        nome: 'Marcos',
        genero: 'Masculino'
    },
]

var btn = document.querySelector('#btnGerar').addEventListener('click', (e) => {
    e.preventDefault()
    const randomElement = json[Math.floor(Math.random() * json.length)].nome;
    let textBarLastName = document.querySelector('#lastName')
    let txt = textBarLastName.value
    
    //para pegar o valor do radio button
    const radioEsc = document.querySelectorAll('input[name="gender"]')
    console.log(radioEsc[0].checked || radioEsc[1].checked)

    //para pegar o valor da caixa de seleção
    const selectionComboBox = document.querySelector('select[name="select-initial"]')
    let selectedElement = selectionComboBox.options[selectionComboBox.selectedIndex].value;
    console.log(selectedElement)

    const textBarName = document.querySelector('#resultName');
    textBarName.style.fontSize = '1.8rem';
    textBarName.style.textAlign = 'center';
    textBarName.style.textTransform = 'capitalize';
    textBarName.style.fontFamily = "'Lobster', cursive";
  
    textBarName.innerHTML = `${randomElement} ${txt}`

});

var btnReset = document.querySelector('#btnResetar').addEventListener('click', (e) => {
    e.preventDefault()
    let textBarLastName = document.querySelector('#lastName')
    textBarLastName.value = ""

    const radioEsc = document.querySelectorAll('input[name="gender"]')
    radioEsc[0].checked = false
    radioEsc[1].checked = false

    const selectionComboBox = document.querySelector('select[name="select-initial"]')
    selectionComboBox.selectedIndex = 0

    const spanResult = document.querySelector('#resultName')
    spanResult.innerHTML = ""

});