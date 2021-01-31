//get the pin from this button
function getPin(){
    var randomNum = (Math.random()*10000+'').split('.')[0];
    if(randomNum.length == 4){
        return randomNum;
    } 
    else{
        return getPin();
    }
}
//display the pin
function generatePin(){
    var pinInput = document.getElementById('pin-generate-input').value = getPin();
}

//handle calculator button event
document.getElementById('digits-container').addEventListener('click',function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        //handle backspace
        //handle clear
        if(digit === 'C'){
            const inputDigit = document.getElementById('typed-pin');
            inputDigit.value = '';
        }

    }
    else{
        const inputDigit = document.getElementById('typed-pin');
        inputDigit.value = inputDigit.value + digit; 
    }
});
function verifyPin(){
    var pin = document.getElementById('pin-generate-input').value
    const inputDigit = document.getElementById('typed-pin').value;
    if(pin === inputDigit){
        document.getElementById('match').style.display = "block";
        document.getElementById('not-match').style.display = "none";
    }
    else{
        document.getElementById('not-match').style.display = 'block';
        document.getElementById('match').style.display = "none";
    }
    
}