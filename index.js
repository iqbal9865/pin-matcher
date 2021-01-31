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