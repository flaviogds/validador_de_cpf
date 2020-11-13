function consult() {
    let input = document.getElementById('input').value;

    if(input=='') {
        document.getElementById('pass').style.display = 'block';
        document.getElementById('pass').innerHTML = 'Campo CPF em branco';
    }
    else {
        let result = validation(input);

        if(result){
            document.getElementById('pass').style.display = 'block';
            document.getElementById('pass').innerHTML = 'CPF valido';
        }
        else{
            document.getElementById('pass').style.display = 'block';
            document.getElementById('pass').innerHTML = 'CPF invalido'
        }
    }
}

function validation(input) {
    let array = input.substring(0, 9);
    let digits = input.substring(9);

    let soma = 0;
    let valid = '';
    let sequence = 0;

    for(i = 0; i < array.length; i++){
        sequence += parseInt(array[i])
        console.log(sequence)
    }
    if(sequence !== 9*array[1]){
        valid=true;
    }

    if(valid){
        for(i = 0; i < array.length; i++) {
            soma = soma + parseInt(array[i])*(10-i);
        }
    
        valid = (soma*10)%11 == 10 || (soma*10)%11 == 11 ? 0 : (soma*10)%11;
    
        if(valid == parseInt(digits[0])) {
            soma = 0;
            array += digits.charAt(0);
    
            for(i = 0; i < array.length; i++) {
                soma = soma + parseInt(array[i])*(11-i);
            }
    
            valid = (soma*10)%11 == 10 || (soma*10)%11 == 11 ? 0 : (soma*10)%11;
    
            return valid == parseInt(digits[1]);
        }
    }
}


function validInput() {
    let input = document.getElementById('input').value;

    let array = input.split('');

    for(i = 0 ; i < array.length ; i++){

        let valid = parseInt(array[i]);

        if(isNaN(valid)) {  
            document.getElementById('out').style.display = 'block';
        }
        else {  
            document.getElementById('out').style.display = 'none';
            document.getElementById('pass').style.display = 'none'
        }
    }
}