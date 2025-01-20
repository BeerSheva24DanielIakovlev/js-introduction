export function myParseInt(strNum) {
    let res = NaN;
    let sign = 1;
    if (strNum != null && strNum != undefined) {
        let index = 0;

        strNum = strNum.toString();
        strNum = strNum.trim();
        if (strNum[0] == '-') {
            index++;
            sign = -1;
        } else if (strNum[0] == '+') {
            index++;
        }
        if (index < strNum.length && !isNaN(getDigit(strNum[index]))) {
            res = 0;
            let running = true;
            while (index < strNum.length && running) {
                let digit = getDigit(strNum[index]);
                if (isNaN(digit)) {
                    running = false;
                } else {
                    res = res * 10 + digit;
                    index++;
                }

            }

        }

    }
    return res *= sign;
}
function getDigit(digitStr) {
    let res = digitStr >= '0' && digitStr <= '9' ? +digitStr : NaN;
    return res;
}

+12;
// export function myToStringFromIntNumber() {
//     //TODO returns string presentation og the given number
//     //if number has type of string, the string should contain a number matching the parseInt syntax
//     //examples:
//     //myToStringFromIntNumber(12.35) -> returns "12"
//     //myToStringFromIntNumber(12.35) -> returns "12"
//     //myToStringFromIntNumber() -> returns "" (empty string)
//     //myToStringFromIntNumber(-12) -> returns "-12"
//     //myToStringFromIntNumber(+12) -> returns "12"
//     //myToStringFromIntNumber("a1") -> returns "" (empty string)
//     //myToStringFromIntNumber("1a") -> returns "1"
//     //Disallowed the following operations
//     //toString()
//     //constructor String
//     //operator + with empty string like "" + 
//     //we need to write function + tests 
// }

export function myToStringFromIntNumber(input) {
    if (input === undefined || input === null) {
        return ""; // Если значение отсутствует
    }

    // Проверяем, является ли входное значение строкой
    let strInput = typeof input === "string" ? input.trim() : input.toString().trim();

    // Если строка пуста, возвращаем ""
    if (strInput.length === 0) {
        return "";
    }

    // Проверяем первый символ на знак
    let sign = "";
    let startIndex = 0;
    if (strInput[0] === "-" || strInput[0] === "+") {
        sign = strInput[0] === "-" ? "-" : "";
        startIndex = 1;
    }

    // Преобразуем строку в число
    let result = "";
    for (let i = startIndex; i < strInput.length; i++) {
        const char = strInput[i];
        if (char >= "0" && char <= "9") {
            result += char; // Добавляем только цифры
        } else {
            break; // Прекращаем обработку при встрече нецифрового символа
        }
    }

    return result.length > 0 ? sign + result : ""; // Возвращаем результат с учётом знака
}

