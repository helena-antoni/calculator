const resultDisplay = document.getElementById("result-display")
const operatorDisplay = document.getElementById("operator-display")

const resultDiv = document.getElementById("result")
const resultIcon = document.getElementById("result-icon") 

function screen() {   
  operatorDisplay.innerHTML = "" 
  resultDisplay.innerHTML = "0"  
} 

function insert(num) {     
    resultDisplay.innerHTML  = num; 
    operatorDisplay.innerHTML += num;   
}  

function allClear() {  
  screen()
}

function clearEntry() {
  let result = resultDisplay.innerHTML
  resultDisplay.innerHTML = result.substring(0, 0)

  if (result.length == 1) {
    let operator = operatorDisplay.innerHTML 
    operatorDisplay.innerHTML = operator.substring(0, operator.length - 1)
    resultDisplay.innerHTML = '0'

     if (operator.length <=1) {
      screen()
     }
  }    
}  

function positiveNegative() {
  let operatorValue = operatorDisplay.innerHTML
  let newOperatorValue = ""

  for (let i = 0; i < operatorValue.length; i++) {
    if (operatorValue[i] === "-" && i !== 0) {
      newOperatorValue += "+"
    } else if (operatorValue[i] === "+") {
      newOperatorValue += "-"
    } else {
      newOperatorValue += operatorValue[i]
    }
  }

  if (newOperatorValue[0] === "-") {
    newOperatorValue = operatorValue.substring(1)
  } else {
    newOperatorValue = "-" + newOperatorValue
  }

  operatorDisplay.innerHTML = newOperatorValue
  calculate()
}

function calculate() {
  let operator = operatorDisplay.innerHTML

  operator = operator.replace("%", "/100")
  operator = operator.replaceAll(",", ".")

  if (operator) {
    resultDisplay.innerHTML = eval(operator).toString().replace(".", ",")

    if (resultDisplay.innerHTML == Infinity) { 
      resultDisplay.innerHTML = "NaN"
    }
  }  
}

function app(){
  addClassHide(); 
}
app();