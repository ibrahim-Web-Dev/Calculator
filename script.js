let variable1=0;
let variable2=0;
let opearation1="+";
function add(a, b){
    return (a*10+b*10)/10
}

function subtract(a, b){
    return (a*10-b*10)/10
}

function multiply(a, b){
    return (a*10*(b*10))/100
}

function divide(a,b){
    return (a*10/(b*10))
}
const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".cal")
const scr= document.querySelector(".screen")

numbers.forEach(
    number=>{
        number.addEventListener("click",()=>{
            scr.textContent+=number.id
            }
        )
    }
)

operators.forEach(
    opeation=>{
        opeation.addEventListener("click" , ()=>{
            switch(opeation.id){
                case "add":
                    variable1=(scr.textContent)
                    opearation1="+"
                    scr.textContent=""
                    break;
                case "subtract":
                    variable1=Number(scr.textContent)
                    opearation1="-"
                    scr.textContent=""
                    break;
                case "multiply":
                    variable1=Number(scr.textContent)
                    opearation1="*"
                    scr.textContent=""
                    break;
                case "divide":
                    variable1=Number(scr.textContent)
                    opearation1="/"
                    scr.textContent=""
                    break;
                case "equal":
                    switch(opearation1){
                        case "+":
                            scr.textContent=add(Number(variable1),Number(scr.textContent))
                            break;
                        case "-":
                            scr.textContent=subtract(Number(variable1),Number(scr.textContent))
                            break;
                        case "*":
                            scr.textContent=multiply(Number(variable1),Number(scr.textContent))
                            break;
                        case "/":
                            scr.textContent=divide(Number(variable1),Number(scr.textContent))
                            break;
                    }
                    opearation1="="
                    break;
            }
            console.log(variable1)
            }
        )
    }
)