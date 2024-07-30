// Select all relevant elements
let lift = document.getElementById("lift");
let liftDoors = document.querySelectorAll(".lift-door");
let btn0 = document.getElementById("0");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");

// Function to open lift doors
function openLiftDoors() {
    lift.classList.add("open");
}

// Function to close lift doors
function closeLiftDoors() {
    lift.classList.remove("open");
}

// Function to move lift and open doors
function moveLift(toFloor, bottomPosition, delay) {
    closeLiftDoors(); // Close doors before moving
    lift.style.transition = `bottom 0.5s ease-in-out ${delay}s`;
    lift.style.bottom = bottomPosition;
    lift.style.zIndex = "90";

    setTimeout(() => {
        openLiftDoors(); // Open doors after moving
    }, 500); // Adjust this timing if needed to match the transition duration
}

// Event listeners for buttons
btn0.addEventListener("click", () => moveLift("Basement", "400px", 0));
btn1.addEventListener("click", () => moveLift("Ground", "300px", 0));
btn2.addEventListener("click", () => moveLift("Floor 1", "200px", 0));
btn3.addEventListener("click", () => moveLift("Floor 2", "100px", 0));
btn4.addEventListener("click", () => moveLift("Floor 3", "0px", 0));

// Ensure buttons are re-enabled after lift has stopped moving
lift.addEventListener("transitionend", () => {
    btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "auto";
});
