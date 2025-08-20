/*
Write an async function called findDog() that:
Gets the dog ID from the input field.
Validates that an ID is entered (show an error if it is blank).
Uses fetch() to call the API: https://dog-vidi.vercel.app/dogs/{id}
If the response is successful, displays the dog's name, breed, and age in the #dogInfo div using template literals.
If the response is not ok (invalid ID), displays "Dog not found!".
Use try...catch to handle errors and show "Dog not found!" if the API call fails.
Style the dog's age dynamically:
Age ≤ 3 → text color should be green
Age > 3 → text color should be blue
Use an inline onclick attribute on the button in index.html instead of addEventListener to call findDog().
*/

const dogIdInput = document.getElementById("dogId");
const displayMessage = document.getElementById("dogInfo");

async function findDog() {
  try {
    const dogId = parseInt(dogIdInput.value);
    const response = await fetch(`https://dog-vidi.vercel.app/dogs/${dogId}`);
    
    if (!response.ok) {
      throw new Error("Dog not found!");
    }
      const dog = await response.json();
      displayMessage.innerHTML = `
      <strong>Name:</strong> ${dog.name}<br>
      <strong>Breed:</strong> ${dog.breed}<br>
      <strong>Age:</strong> <span id="dogAge">${dog.age}</span>
      `;
      showMessage(dog.age)
    } catch (error) {
    displayMessage.textContent = "Dog not found!";
  }
}

function showMessage(age) {
  const ageElement = document.getElementById("dogAge");
  if (ageElement) {
    ageElement.style.color = age <= 3 ? "green" : "blue";
  }
}
