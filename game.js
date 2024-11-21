const images = [
    'rock.png',        // Rock
    'paper-plane.png', // Paper
    'scissors (1).png' // Scissors
];

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const displaytext = document.getElementById("text-appear");

const displayContainer = document.getElementById("display-ares");

// Function to handle the game
function handleGame(userChoice) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const computerChoice = randomIndex; // Computer's random choice

    // Clear previous image
    displayContainer.innerHTML = "";

    // Show the computer's choice image
    const img = document.createElement("img");
    img.src = images[computerChoice];
    img.alt = `Computer chose ${['Rock', 'Paper', 'Scissors'][computerChoice]}`;
    img.style.height = "100%"; // Adjust image to fit the container
    img.style.width = "auto";  // Maintain aspect ratio
    displayContainer.appendChild(img);

    // Delay the game result alert to allow the image to render
    setTimeout(() => {
        // Clear the text container at the start of each game round
        displaytext.innerHTML = "";
    
        // Game logic
        if (userChoice === computerChoice) {
            // Create a <p> element for the tie message
            let tieText = document.createElement('p');
            tieText.textContent = "It's a tie!";
            displaytext.appendChild(tieText); // Add the tie message to #text-appear
        } else if (
            (userChoice === 0 && computerChoice === 2) || // Rock beats Scissors
            (userChoice === 1 && computerChoice === 0) || // Paper beats Rock
            (userChoice === 2 && computerChoice === 1)    // Scissors beat Paper
        ) {
            // Create a <p> element for the win message
            let createwintext = document.createElement('p');
            createwintext.textContent = "You have won!";
            displaytext.appendChild(createwintext); // Add the win message to #text-appear
        } else {
            // Create a <p> element for the lose message
            let createlosetext = document.createElement('p');
            createlosetext.textContent = "You have lost!";
            displaytext.appendChild(createlosetext); // Add the lose message to #text-appear
        }
    }, 200); // Delay of 500ms (0.5 seconds)
}

// Event listeners for buttons
rockButton.addEventListener("click", function (event) {
    event.preventDefault();
    handleGame(0); // User chose Rock (index 0)
});

paperButton.addEventListener("click", function (event) {
    event.preventDefault();
    handleGame(1); // User chose Paper (index 1)
});

scissorButton.addEventListener("click", function (event) {
    event.preventDefault();
    handleGame(2); // User chose Scissors (index 2)
});
