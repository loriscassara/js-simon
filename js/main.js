memory();

function memory() {
    const numbers = document.getElementById('numbers');
    const inputContainer = document.getElementById('input-container');
    const numberInput = document.getElementById('number-input');
    const clock = document.querySelector('.orologio');
    const btn = document.getElementById('button');
    const result = document.getElementById('result');

    const numeriDaGenerare = 5;
    const max = 100;
    const min = 1;
    const numSecondi = 30;
    const numbersArray = [];


    inputContainer.classList.add('d-none');

    while (numbersArray.length < numeriDaGenerare) {
        let randomNum = getRandomNumber(min, max);
        if (!numbersArray.includes(randomNum)) {
            numbersArray.push(randomNum);
        }
    }

    numbers.innerHTML = `
    <h2>ecco l'array di numeri:</h2> 
    <strong> ${numbersArray.join(" ")} </strong>
    </br>
    <p>hai ${numSecondi} secondi per memorizzarlo</p>
    `;

    setTimeout(function () {
        numbers.textContent = "";
        inputContainer.classList.remove('d-none');
        clock.classList.add('d-none');
        numberInput.focus();
    }, numSecondi * 1000);

    btn.addEventListener("click", function () {
        inputContainer.classList.add('d-none');

        const inputText = numberInput.value;
        const inputArray = inputText.split(" ");
        const userNumbers = [];

        for (let i = 0; i < inputArray.length; i++) {
            const numberString = inputArray[i];
            const number = parseInt(numberString);

            if (!isNaN(number)) {
                userNumbers.push(number);
            }
        }

        const correctNumbers = [];
        for (let i = 0; i < numbersArray.length; i++) {
            const num = numbersArray[i];
            if (userNumbers.includes(num)) {
                correctNumbers.push(num);
            }
        }

        result.innerHTML = `<h1>Hai indovinato ${correctNumbers.length} numeri:</h1> <p>${correctNumbers.join(", ")}</p> </br> <p>l'array corretto è <strong>${numbersArray}</strong></p>`;
    });
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }