
function generatePin(){
    let pin = String(Math.round(Math.random()*10000));
    if(pin.length === 4){
        return pin;
    }else{
        return generatePin();
    }
    
}

document.getElementById('generate-pin').addEventListener('click',function(){
    let randomPin = generatePin();
let displayPinField = document.getElementById('display-pin');
displayPinField.value = randomPin;
document.getElementById('typed-numbers').value = '';
let alert = document.getElementsByClassName('notify');
for(let item of alert){
    item.style.display = 'none';
}
});


let btn = document.getElementsByClassName('button');
let typeNumberField = document.getElementById('typed-numbers');

for(let keys of btn){
    keys.addEventListener('click',function(){
        const number = keys.innerText;
        if(isNaN(number)){
if(number === 'C'){
    typeNumberField.value = '';
    
}else if(number === '<'){
 let newValue = typeNumberField.value.slice(0 ,-1);
 typeNumberField.value = newValue;
}
        }else{
            let previousNumberFieldValue = typeNumberField.value;
            typeNumberField.value = previousNumberFieldValue + number;
            
            
        }
    })
}

document.getElementById('verify-pin').addEventListener('click',function(){
    let displayPinField = document.getElementById('display-pin');
    let currentPin = displayPinField.value;
    let typeNumberValue = typeNumberField.value;

    if(currentPin === typeNumberValue){
       document.getElementById('pin-success').style.display = 'block';
       document.getElementById('pin-failure').style.display = 'none';
       displayPinField.value = '';
       typeNumberField.value = '';
    }else{
        document.getElementById('pin-failure').style.display = 'block';
        document.getElementById('pin-success').style.display = 'none';
    }
})
