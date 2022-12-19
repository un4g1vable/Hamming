function code(){
    let str = document.getElementById('inpStr').value.split('');
    // считываем в переменную str введённое пользователем значение
    if ((str.length = 4) && !str.includes("2") && !str.includes("3") && !str.includes("4") && !str.includes("5") && !str.includes("6") && !str.includes("7") && !str.includes("8") && !str.includes("9")) {
        for (let i = 0; i < str.length; i++){
            str[i] *= 1;
        }
        // переводим в int
        let controlBites = new Array();
        let firstBite = (str[0] + str[1]+ str[2]) % 2;
        let secondBite = (str[1] + str[2]+ str[3]) % 2;
        let thirdBite = (str[0] + str[1]+ str[3]) % 2;
        controlBites.push(firstBite);
        controlBites.push(secondBite);
        controlBites.push(thirdBite);
        // считаем контрольные биты и складываем их в отдельный массив
        document.getElementById('codedStr').value = str.join('') + controlBites.join('');}
        // склеиваем введённое число с контрольными битами и выводим
    else
        document.getElementById('Error').innerText = 'Ошибка, введите другое число';
        // если условие не выполнилось - выводим ошибку
}

function decode(){
    let codedStr = document.getElementById('codedStr').value.split('');
    // читаем закодированное сообщение из поля и представлям поэлементно в виде массива
    
    for (let i = 0; i < codedStr.length; i++){
        codedStr[i] *= 1;
    }
    // переводим элементы массива в int

    let firstSyndrome = (codedStr[0] + codedStr[1] + codedStr[2] + codedStr[4]) % 2;
    let secondSyndrome = (codedStr[1] + codedStr[2] + codedStr[3] + codedStr[5]) % 2;
    let thirdSyndrome = (codedStr[0] + codedStr[1] + codedStr[3] + codedStr[6]) % 2;
    
    if (firstSyndrome !=0 && secondSyndrome == 0 && thirdSyndrome !=0) { // синдром 101 - ошибка в первом бите
        switch (codedStr[0]){
            case 1:
                codedStr[0] = 0;
                break;
            case 0:
            codedStr[0] = 1;
                break;
        }
        // заменяем исходный первый бит на противоположное значение
        document.getElementById('Error').textContent = 'Ошибка в первом бите';
    }
    if (firstSyndrome !=0 && secondSyndrome !=0 && thirdSyndrome  !=0) { // синдром 111 - ошибка во втором бите
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
    // заменяем исходный второй бит на противоположное значение
    if (firstSyndrome !=0 && secondSyndrome  !=0 && thirdSyndrome == 0) { //синдром 110 - ошибка в третьем бите
        switch (codedStr[2]){
            case 1:
                codedStr[2] = 0;
                break;
            case 0:
            codedStr[2] = 1;
                break;
        }
        document.getElementById('Error').textContent = 'Ошибка в третьем бите';
    }
    // заменяем исходный третий бит на противоположное значение
    if (firstSyndrome == 0 && secondSyndrome !=0 && thirdSyndrome  !=0) { //синдром 011 - ошибка в четвертом бите
        switch (codedStr[3]){
            case 1:
                codedStr[3] = 0;
                break;
            case 0:
            codedStr[3] = 1;
                break;
        }
        // заменяем исходный четвёртый бит на противоположное значение
        document.getElementById('Error').textContent = 'Ошибка в четвёртом бите';
    }
    if (firstSyndrome !=0 && secondSyndrome == 0 && thirdSyndrome == 0) {//синдром 100
        document.getElementById('Error').textContent = 'Ошибка в первом контрольном бите';
    }
    if (firstSyndrome == 0 && secondSyndrome !=0 && thirdSyndrome == 0) {//сиднром 010
        document.getElementById('Error').textContent = 'Ошибка во втором контрольном бите';
    }
    if (thirdSyndrome !=0 && firstSyndrome == 0 && secondSyndrome == 0) {//сиднром 001
        document.getElementById('Error').textContent = 'Ошибка в третьем контрольном бите';
    } 
    
    let decStr = codedStr[0]+''+codedStr[1]+''+codedStr[2]+''+codedStr[3];
    document.getElementById('decodedStr').value = decStr;
    // ^ возвращаем декодированное сообщение
}
    
