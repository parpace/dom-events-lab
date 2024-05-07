// Was trying my own thing and couldnt make it work. Tobias helped explain the eval() equation and that was a whole lot simpler!

const numbers = document.querySelectorAll(".button:not(.equals):not(.clear)") // Alfred Nedohon found this solution
const equals = document.querySelector(".equals")
const clear = document.querySelector(".clear")
let display = document.querySelector(".display")
let equation = ''

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        equation += event.target.innerText
        display.innerText = equation
    })
})

equals.addEventListener("click", () => {
    display.innerText = eval(equation)
})

clear.addEventListener("click", () => { 
    display.innerText = '0'
    equation = ''
})


// const buttons = document.querySelectorAll(`.button`)
// const keys = calculator.querySelector(`button`)

/*-------------------------------- Variables --------------------------------*/

// let currentDisplay = `0`
// let resultDisplay = false

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

// buttons.forEach(button => {
//     button.addEventListener("click", (event) => {
//       currentDisplay = event.target.innerText
//       updateDisplay()
//     })
//   })
  
/*-------------------------------- Functions --------------------------------*/

// function updateDisplay() {
//     const display = document.querySelector(`.display`)
//     display.textContent = currentDisplay
// }

// function calculateResult() {
//         try {
//             const result = eval(currentDisplay)
//             currentDisplay += `\n-` + result.toString()
//             updateDisplay()
//         }
//         catch (error) {
//             currentDisplay += `\nError`
//             updateDisplay()
//         }
//         resultDisplay = true
//     }

// function appendToDisplay() {
//     if (currentDisplay === `0` || resultDisplay) {
//         currentDisplay = `.button`
//     }
//     else {
//         currentDisplay += `.button`
//     }
//     resultDisplay = false
//     updateDisplay()
// }

// function calculateResult() {
//     try {
//         const result = eval(currentDisplay)
//         currentDisplay += `\n-` + result.toString()
//         updateDisplay()
//     }
//     catch (error) {
//         currentDisplay += `\nError`
//         updateDisplay()
//     }
//     resultDisplay = true
// }

// function clearLastElement() {
//     currentDisplay = currentDisplay.slice(0, -1);
//     if (currentDisplay === "") {
//       currentDisplay = "0";
//     }
//     updateDisplay();
//   }
