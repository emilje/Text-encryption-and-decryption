"use strict"

const btnEncrypt = document.querySelector(".btn--encrypt");
const btnDecrypt = document.querySelector(".btn--decrypt");
const inputMsg = document.querySelector(".input--message")
const cryptMsg = document.querySelector(".input--crypt")
const modal = document.querySelector(".Modal");
const btnModalClose = document.getElementById("closeModal");
const modalText = document.querySelector(".ModalText");


const input = "0123456789!?,.-AaBbCcDdEeFfGgHhIiJjKkLl MmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const crypt = "ArDZiaIgsfOQKGVzLuF.HJe2,5j3-P B4nvN7?xd1mtoyqRT!E0h69CYplcU8XkWbwSM";


const encrypt = function (message) {
    let criptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let letterNumber = input.indexOf(message[i]);
        //console.log(letterNumber);
        criptedMessage += crypt[letterNumber];
    }
    //console.log(criptedMessage);
    return criptedMessage;
}

const decrypt = function (message) {
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let letterNumber = crypt.indexOf(message[i]);
        decryptedMessage += input[letterNumber];
    }
    //console.log(decryptedMessage);
    return decryptedMessage;
}

btnEncrypt.addEventListener("click", function () {
    modalText.textContent = `Encrypted message is: ${encrypt(inputMsg.value)}`;
    modal.classList.remove("hidden");
});

btnDecrypt.addEventListener("click", function () {
    modalText.textContent = `Decrypted message is: ${decrypt(inputMsg.value)}`;
    modal.classList.remove("hidden");
})

btnModalClose.addEventListener("click", function () {
    modal.classList.add("hidden");
});

window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
}



