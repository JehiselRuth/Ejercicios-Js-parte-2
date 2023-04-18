const btn = document.querySelector("button");
let age = document.getElementById("container-driver-license__userage")
let username = document.getElementById('container-driver-license__username')
let form = document.getElementById('container-driver-license')


// el método addEventListener() agrega un evento de clic al documento:
btn.addEventListener("click", () => {
    let ageResult = age.value
    let usernameResult = username.value

    let canDrive = ageResult;
    if (ageResult >=18) {
        alert(`¡Muy bien ${usernameResult} , tienes edad para conducir!`)
    } else {
        alert(`Lo siento ${usernameResult} , NO tienes edad para conducir.`)
}})