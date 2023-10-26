function calculateDecToBin() {
    const inputForNumber = document.getElementById('inputNumber');
    const inputForResult =
        document.getElementById('outputNumber');

    let decimalNumber = inputForNumber.value;

    if (!isNaN(decimalNumber)) {
        let binaryResult = decimalToBinary(Number(decimalNumber));

        inputForResult.value = binaryResult;
    } else {
        inputForResult.value = "Некорректный ввод. Введите число.";
    }
}
function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        return "0";
    }

    let binaryResult = "";
    while (decimalNumber > 0) {
        const remainder = decimalNumber % 4;
        binaryResult = remainder + binaryResult;
        decimalNumber = Math.floor(decimalNumber / 4);
    }

    return binaryResult;
}