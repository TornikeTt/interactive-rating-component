let rating_state = document.querySelector(".rating_state");
let thank_you_state = document.querySelector(".thank_you_state");

let form = document.querySelector("form");
let submit_button = document.querySelector(".submit");
let text = document.querySelector(".rating-text");

let selectedRating = null;

// Handle button clicks inside the form to capture the rating value
form.addEventListener("click", (e) => {
    if (e.target.type === "button" && e.target.name === "rating") {
        selectedRating = e.target.value;
    }
});

// Handle form submission to display the thank you message
submit_button.addEventListener("click", (e) => {
    e.preventDefault();

    if (selectedRating) {
        text.innerText = `You selected ${selectedRating} out of 5`;
        rating_state.style.display = "none";
        thank_you_state.style.display = "flex";
    } else {
        alert("Please select a rating before submitting.");
    }
});
