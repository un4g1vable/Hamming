function code(){
    let str = document.getElementById('inpStr').value.split('');
    if ((str.length = 4) && !str.includes("2") && !str.includes("3") && !str.includes("4") && !str.includes("5") && !str.includes("6") && !str.includes("7") && !str.includes("8") && !str.includes("9")) {
        for (let i = 0; i < str.length; i++){
            str[i] *= 1;
        }
        let controlBites = new Array();
        let firstBite = (str[0] + str[1]+ str[2]) % 2;
        let secondBite = (str[1] + str[2]+ str[3]) % 2;
        let thirdBite = (str[0] + str[1]+ str[3]) % 2;
        controlBites.push(firstBite);
        controlBites.push(secondBite);
        controlBites.push(thirdBite);
        document.getElementById('codedStr').value = str.join('') + controlBites.join('');}
    else
        document.getElementById('Error').innerText = 'Ошибка, введите другое число';
}

function decode(){
    let codedStr = document.getElementById('codedStr').value.split('');
    
    for (let i = 0; i < codedStr.length; i++){
        codedStr[i] *= 1;
    }

    let firstSyndrome = (codedStr[0] + codedStr[1] + codedStr[2] + codedStr[4]) % 2;
    let secondSyndrome = (codedStr[1] + codedStr[2] + codedStr[3] + codedStr[5]) % 2;
    let thirdSyndrome = (codedStr[0] + codedStr[1] + codedStr[3] + codedStr[6]) % 2;
    
    if (firstSyndrome !=0 && secondSyndrome == 0 && thirdSyndrome !=0) {
        switch (codedStr[0]){
            case 1:
                codedStr[0] = 0;
                break;
            case 0:
            codedStr[0] = 1;
                break;
        }
        document.getElementById('Error').textContent = 'Ошибка в первом бите';
    }
    if (firstSyndrome !=0 && secondSyndrome !=0 && thirdSyndrome  !=0) {
        switch (codedStr[1]){
            case 1:
                codedStr[1] = 0;
                break;
            case 0:
            codedStr[1] = 1;
                break;
            }
            document.getElementById('Error').textContent = 'Ошибка во втором бите';
    }
    if (firstSyndrome !=0 && secondSyndrome  !=0 && thirdSyndrome == 0) {
        switch (codedStr[2]){
            case 1:
                codedStr[2] = 0;
                break;
            case 0:
            codedStr[2] = 1;
                break;
        }
        document.getElementById('Error').textContent = 'Ошибка в третьем';
    }
    if (firstSyndrome == 0 && secondSyndrome !=0 && thirdSyndrome  !=0) {
        switch (codedStr[3]){
            case 1:
                codedStr[3] = 0;
                break;
            case 0:
            codedStr[3] = 1;
                break;
        } 
        document.getElementById('Error').textContent = 'Ошибка в четвёртом бите';
    }
    if (firstSyndrome !=0 && secondSyndrome == 0 && thirdSyndrome == 0) {
        document.getElementById('Error').textContent = 'Ошибка в первом контрольном бите';
    }
    if (firstSyndrome == 0 && secondSyndrome !=0 && thirdSyndrome == 0) {
        document.getElementById('Error').textContent = 'Ошибка во втором контрольном бите';
    }
    if (thirdSyndrome !=0 && firstSyndrome == 0 && secondSyndrome == 0) {
        document.getElementById('Error').textContent = 'Ошибка в третьем контрольном бите';
    } 
    
    let decStr = codedStr[0]+''+codedStr[1]+''+codedStr[2]+''+codedStr[3];
    document.getElementById('decodedStr').value = decStr;   
}
    
