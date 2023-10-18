function init(){
    const number1Field = document.getElementById("number1Field")
    const number2Field = document.getElementById("number2Field")
    const addButton = document.getElementById("addButton")
    const subtractButton = document.getElementById("subtractButton")
    const multiplyButton = document.getElementById("multiplyButton")
    const divideButton = document.getElementById("divideButton")
    const answerField = document.getElementById("answerField")
    function onClickAdd(){
        const number1 = Number(number1Field.value)
        const number2 = Number(number2Field.value)
        answerField.value = number1 + number2;
    }
    function onClickSubtract(){
        const number1 = Number(number1Field.value)
        const number2 = Number(number2Field.value)
        answerField.value = number1 - number2;
    }
    function onClickMultiply(){
        const number1 = Number(number1Field.value)
        const number2 = Number(number2Field.value)
        answerField.value = number1 * number2;
    }
    function onClickDivide(){
        const number1 = Number(number1Field.value)
        const number2 = Number(number2Field.value)
        answerField.value = number1 / number2;
    }
    addButton.onclick = onClickAdd;
    subtractButton.onclick = onClickSubtract;
    multiplyButton.onclick = onClickMultiply;
    divideButton.onclick = onClickDivide;
    window.fun.onclick = ()=> document.body.style.backgroundColor=`
        rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})
    `
}
window.onload = init;


// variable, property, attribute, field, column