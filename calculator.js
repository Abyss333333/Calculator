

let numbers = document.querySelector(".numbers");

numbers.style.cssText = " display:inline-grid; grid-template-columns: 140px 140px 140px ; grid-template-rows: 140px 140px 140px 140px ";

let displayString ="";

for (let i=9; i> 0; i--){
    const number = document.createElement("button");
    number.style.cssText = " padding:10px; ";
    number.id = i.toString();
    number.textContent = i.toString();
    numbers.append(number);


    number.addEventListener ('click', () => {

        displayString += number.id;
        display (displayString);
    });

}



function display (string) {
    
    if (displayString === "ERROR" || displayString === "Please Dont Divide By Zero" || displayString === "ERROR, MORE INPUTS NEEDED"){

        displayString = "";
    }
    
    let display = document.querySelector (".display_bar");
    display.textContent = string;
}



const zero = document. createElement ("button");
zero.style.cssText = "padding:10px;  ";
zero.id = "0";
zero.textContent = "0";
numbers.append(zero);
zero.addEventListener ('click', () => {

    displayString += zero.id;
    display (displayString);
});


const clear = document.querySelector(".clear");
clear.addEventListener ('click', () => {

    displayString  = "";
    display (displayString);
});

const erase = document.querySelector(".Backspace");
erase.addEventListener ('click', () => {
    let length = displayString.length;
    if (length != 0){
        
        if (displayString[length-1] === " "){
            displayString = displayString.slice(0,length-3);
            console.log(displayString);
            display (displayString);
        }
        else {
            displayString = displayString.slice(0,length-1);
            console.log(displayString);
            display (displayString);
        }
    }
});




const period = document.createElement ("button")
period.style.cssText = "padding:10px;  ";
period.id = ".";
period.textContent = ".";
numbers.append(period);
period.addEventListener ('click', () => {

    displayString += period.id;
    display (displayString);
});




const equal = document. createElement ("button");
equal.style.cssText = "padding:10px;  ";
equal.id = "equal";
equal.textContent = "=";
numbers.append(equal);

equal.addEventListener ('click', () =>{

    if (displayString === ""){
        displayString = "ERROR";
        display("ERROR");
    }
    
    else {
        let array = displayString. split (" ");
    
    
        if (array[array.length -1 ] === "" ){
            array.pop();
        }
    
        if (array.length <=2 ){
            displayString = "ERROR, MORE INPUTS NEEDED";
            display(displayString);
       
        }
    

        else{
            if (operatorsNoSpace.indexOf(array[array.length-1]) != -1){
                array.pop();
            }
    
        

            let result = "";
            while (array.length != 1){
                result = (calculator(parseFloat(array[0]), parseFloat(array[2]), array[1])).toString();

                for (let i=0; i<3; i++){
                    array.shift();
                }

                array.unshift(result);

            }

            if (result === "Infinity"){
                result = "Please Dont Divide By Zero" ;
            }

            else if (result === "NaN"){
                result = "ERROR";
            }

            else if (result.search(".")!= -1){
                if (result[result.length-2] === "0" && result[result.length-1]=== "0"){
                    result = result.slice(0,result.length -3 )
                }
            }
            displayString = result;
            display(displayString);

        }

    }

});

let operators = [" + ", " - " , " * " , " / "];
let operatorsNoSpace = ["+", "-" , "*" , "/"];

let ops = document.querySelector(".operators");

ops.style.cssText = " display:inline-grid; grid-template-columns: 140px  ; grid-template-rows: 140px 140px 140px 140px ";

for (let j=0; j<operators.length; j++){
    const operator = document.createElement("button");
    operator.style.cssText = " padding:10px; ";
    operator.id = operators[j];
    operator.textContent = operators[j];
    ops.append(operator);

    operator.addEventListener ('click', () => {

        displayString += operator.id;
        display (displayString);
    });
}



function calculator (x,y,operator) {

    if (operator === "+"){
        return (Math.round((x+y)*100)/100).toFixed(2);
    }

    else if (operator === "-"){
        return (Math.round((x-y)*100)/100).toFixed(2);
    }

    else if (operator === "*"){
        return (Math.round((x*y)*100)/100).toFixed(2);
    }

    else if (operator ==="/"){
        return (Math.round((x/y)*100)/100).toFixed(2);
    }

    
}

//module.exports = calculator;