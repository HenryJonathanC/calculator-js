class calculator{
    constructor(previousTextElement, currentTextElement){
        this.previousTextElement=previousTextElement
        this.currentTextElement=currentTextElement
        this.clear()
        }
        clear(){
            this.current=''
            this.previous=''
            this.operation=undefined
        }
        delete(){

        }
        appendNumber(number){
            this.current=number
        }
        operation(operation){

        }
        compute(){

        }
        updateDisplay(){
            this.currentTextElement.innerText=this.current
        }
}

const numberButtons = document.querySelectorAll(['data-number'])
const operation = document.querySelectorAll(['data-operation'])
const equalsBtn = document.querySelector(['data-equals'])
const deleteBtn = document.querySelector(['data-delete'])
const allClearBtn = document.querySelector(['data-all-clear'])
const previousTextElement = document.querySelector(['data-previous'])
const currentTextElement = document.querySelector(['data-current'])

const calculator=new calculator(previousTextElement, currentTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})