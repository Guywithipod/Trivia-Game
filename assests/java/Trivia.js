
// here we have an array that is built for our questions and all thier relevant information.
const questions = [
    {
        question: "Whats the biggest lake in the world?",
        choices: ["Superior", "Hudson", "Alantic", "Caspian Sea"],
        answer: "Caspian Sea",
        explination: "Despite its name the Caspian Sea is actually a lake and it beats lake michigan and huran combimed by almost 100,000 square miles!"
    },
    {
        question: 'Whats the biggest planet in the solar system?',
        choices: ["Jupiter", "Earth", "Venus", "saturn"],
        answer: "Jupiter",
        explination: "he largest planet in our solar system by far is Jupiter, which beats out all the other planets in both mass and volume. Jupiter's mass is more than 300 times that of Earth, and its diameter, at 140,000 km, is about 11 times Earth's diameter."
    },
    {
        question: 'why is the sky blue?',
        choices: ["Its the oceans reflection", "water is blue and its in the sky", "it depends on the lights wavelength", "the sky isnt blue"],
        answer: "it depends on the lights wavelength",
        explination: "Blue light is scattered in all directions by the tiny molecules of air in Earth's atmosphere. Blue is scattered more than other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time."
    },
    {
        question: 'why is grass green ? ',
        choices: ["Chlorophyll", "My grass is brown", "it depends on the lights wavelength", "Because I take good care of my lawn"],
        answer: "Chlorphyll",
        explination: "Chlorophyll absorbs blue light (high energy, short wavelengths) and red light (low energy, longer wavelengths) well, but mostly reflects green light."
    },
    {
        question: 'what town in Belgium is known for its healing waters?',
        choices: ["Brussels", "Liege", "SPA", "Namur"],
        answer: "SPA",
        explination: "The origin of the word spa comes from the Belgian town of Spa, known since Roman times for its baths. Salus per aquae - health through water "
    },
    {
        question: 'can you see why kids love the taste of cinnemon toast crunch?',
        choices: ["yeah duh", "no im an old head", "ew", "i dont eat cearal"],
        answer: "no im an old head",
        explination: ":)"
    },
]
// here is our start button that begins the timer and changes the css to look like our trivia game
let currentQuestion = 0;
let score = 0;
let wrong = 0;
let timer = 100;
let intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;

    document.getElementById("timer").innerHTML = "Time left:" + timer;

    if (timer === 0) {
        stop();

    }
}
//here is the function to clear the quesions and tally up the correct answers
function stop() {
    clearInterval(intervalId);

}

const startButton = document.getElementById("start-button")

const container = document.getElementById("container");

// when we click the start button, the function deletes the button and creates our new page.

startButton.addEventListener("click", function () {

    run()

    event.preventDefault();

    // here we delete the button
    container.innerHTML = "";

    //here is my main header
    container.innerHTML = '<h1>' + "Totally Trivial Trivia!" + "</h1>";
    // here is where question one is droped 1 from our questions array
    const question1 = document.getElementById("questions")

    question1.innerHTML = questions[0].question;




    // looping through the choices array in our questions array object#1
    for (let i = 0; i < questions[0].choices.length; i++) {
        //we create a button for each choice.
        const questionOneButtons = document.createElement("button");

        questionOneButtons.classList.add("choices");

        questionOneButtons.setAttribute("data-name", questions[0].choices[i]);

        questionOneButtons.innerHTML = questions[0].choices[i];

        document.getElementById("buttons").append(questionOneButtons);

    }

    const question2 = document.getElementById("question2")

    question2.innerHTML = questions[1].question;

    for (let i = 0; i < questions[1].choices.length; i++) {

        const questionTwoButtons = document.createElement("button");

        questionTwoButtons.classList.add("choices2");

        questionTwoButtons.setAttribute("data-name", questions[1].choices[i]);

        questionTwoButtons.innerHTML = questions[1].choices[i];

        document.getElementById("question2-buttons").append(questionTwoButtons);

    }

    const question3 = document.getElementById("question3")

    question3.innerHTML = questions[2].question;

    for (let i = 0; i < questions[2].choices.length; i++) {

        const questionThreeButtons = document.createElement("button");

        questionThreeButtons.classList.add("choices3");

        questionThreeButtons.setAttribute("data-name", questions[2].choices[i]);

        questionThreeButtons.innerHTML = questions[2].choices[i];

        document.getElementById("question3-buttons").append(questionThreeButtons);

    }
    const question4 = document.getElementById("question4")

    question4.innerHTML = questions[3].question;

    for (let i = 0; i < questions[3].choices.length; i++) {

        const questionfourButtons = document.createElement("button");

        questionfourButtons.classList.add("choices4");

        questionfourButtons.setAttribute("data-name", questions[3].choices[i]);

        questionfourButtons.innerHTML = questions[3].choices[i];

        document.getElementById("question4-buttons").append(questionfourButtons);

    }
    const question5 = document.getElementById("question5")

    question5.innerHTML = questions[4].question;

    for (let i = 0; i < questions[4].choices.length; i++) {

        const questionFourButtons = document.createElement("button");

        questionFourButtons.classList.add("choices5");

        questionFourButtons.setAttribute("data-name", questions[4].choices[i]);

        questionFourButtons.innerHTML = questions[4].choices[i];

        document.getElementById("question5-buttons").append(questionFourButtons);

    }
    const question6 = document.getElementById("question6")

    question6.innerHTML = questions[5].question;

    for (let i = 0; i < questions[5].choices.length; i++) {

        const questionSixButtons = document.createElement("button");

        questionSixButtons.classList.add("choices6");

        questionSixButtons.setAttribute("data-name", questions[5].choices[i]);

        questionSixButtons.innerHTML = questions[5].choices[i];

        document.getElementById("question6-buttons").append(questionSixButtons);

    }
});

//each question should only allow one answer to be clicked

// This is the function that is ran once our timer is up and switches the css to reveal the total correct answers, incorrect answers, and unanswered.

setTimeout(timeUp, 1000 * 15);

function timeUp() {


};