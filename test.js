const idNumberInput = document.getElementById('idNumber');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');

idNumberInput.addEventListener('input', autofillInformation);

function autofillInformation() {
  const idNumber = idNumberInput.value.trim();
  
  // Check if the ID number has the required length
  if (idNumber.length === 9) {
    // Make an AJAX request to fetch data from the JSON file
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.idNumber === idNumber);
        if (user) {
          firstNameInput.value = user.firstName;
          lastNameInput.value = user.lastName;
          emailInput.value = user.email;
        } else {
          clearInputFields();
        }
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    clearInputFields();
  }
}

function clearInputFields() {
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
}

idNumberInput.addEventListener('input', clearInputFields);
