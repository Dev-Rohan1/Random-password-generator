let passwordBox = document.querySelector('.password');
let generateBtn = document.querySelector('generate-btn');
let copyBtn = document.querySelector('copy-btn');


let upperCase = "ABCDEFGHIJKLMNOPQRSTUNWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = "!@#$%^&*(){}[]><?,.=+-_``~|\/";

let length = 12;


let allCha = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allCha[Math.floor(Math.random() * allCha.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}