const binInput = document.querySelector('#bin-input')
const btnConvert = document.querySelector('#btn-convert')
const decOutput = document.querySelector('#dec-output')
const errorMsg = document.querySelector('#error-msg');
const btnClear = document.querySelector('#clear')

let binaryInput ='';
binInput.addEventListener('input',(event)=>{
    binaryInput = event.target.value;
    let lastInput = binaryInput.charAt(binaryInput.length - 1);

    if(lastInput !== '1' && lastInput !== '0' ){
        binInput.className = "error";
        errorMsg.style.display = "block";
    }
    else{
        binInput.className = "";
        errorMsg.style.display = "none";
    }
})

btnConvert.addEventListener('click',(event)=>{

    let binaryLength = binaryInput.length;
    let decimalValue = 0;
    for(let i = 0;i<binaryLength;i++){
        if(binaryInput[i] === '1'){
            decimalValue += Math.pow(2,binaryLength - i - 1)
        }
    }
    
    //if nothing is entered
    if(binaryInput === ''){
        decimalValue = '';
    }
    decOutput.value = decimalValue;
})

btnClear.addEventListener('click',(event)=>{
    binInput.value = decOutput.value = binaryInput = "";
})