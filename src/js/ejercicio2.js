const dniButton = document.getElementById("container-DNI-letter__btn");
const number = document.getElementById('container-DNI-letter__dniNumber');
const table = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];


dniButton.addEventListener("click", () => {
    const dniNumber = number.value;
    if (isNaN(dniNumber) || dniNumber < 0 || dniNumber > 99999999) {
        alert('Debes introducir un número entre 0 y 99999999');
    } else {
        const rest23 = dniNumber % 23;
        const dniLetter = table[rest23];
        alert(`Tú DNI es el número ${dniNumber} y la letra es ${dniLetter}`);
        
    }
});