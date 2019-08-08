const computerChoices = ["oblivion", "Genisis", "Samurai", "magnets", "breathless"];

const userGuess = [];

const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

const guessesLeft = 9

const userGuessesLeft = document.getElementById("user-gusses-left")

const userChoose = document.getElementById("user-gusses-left")


if (computerGuess === computerChoices[0]) {

    document.onkeyup = function (event) {

       userGuess.push(event.key);

       userChoose.textContent = "you choose: " + userGuess;

        let userKey = event.key

        if (userkey === "o") {
            document.getElementById("first-letter").textContent = userkey
        };
        if (userkey === "b") {
            document.getElementById("second-letter").textContent = userkey
        };
        if (userkey === "l") {
            document.getElementById("third-letter").textContent = userkey
        };
        if (userkey === "i") {
            document.getElementById("fourth-letter").textContent = userkey
        };
        if (userkey === "v") {
            document.getElementById("fifth-letter").textContent = userkey
        };
        if (userkey === "i") {
            document.getElementById("sixth-letter").textContent = userkey
        };
        if (userkey === "o") {
            document.getElementById("seventh-letter").textContent = userkey
        };
        if (userkey === "n") {
            document.getElementById("eighth-letter").textContent = userkey
        };
     
       

        userGuessesLeft.textContent = "guesses left: " + guessesleft;

    };