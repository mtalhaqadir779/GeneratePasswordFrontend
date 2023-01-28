const baseUrl = amazonEc2PublicAddress;

const form = document.getElementById("password-form");
const passwordLengthInput = document.getElementById("password-length");
const hasUpperCaseInput = document.getElementById("has-uppercase");
const hasLowerCaseInput = document.getElementById("has-lowercase");
const hasSpecialInput = document.getElementById("has-special");
const hasNumberInput = document.getElementById("has-number");
const passwordDisplay = document.getElementById("password-display");
const checkboxes = document.querySelectorAll('input[type=checkbox]');

function validateForm() {
    
    var checked = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        alert('Please select at least one option.');
        return false;
    }
    return true;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if(!validateForm()){
    return;
  }

  const passwordLength = passwordLengthInput.value;
  const hasUpperCase = hasUpperCaseInput.checked;
  const hasLowerCase = hasLowerCaseInput.checked;
  const hasSpecial = hasSpecialInput.checked;
  const hasNumber = hasNumberInput.checked;

  try {
    console.log(
      `length=${passwordLength}&hasUpperCase=${hasUpperCase}&hasLowerCase=${hasLowerCase}&hasSpecial=${hasSpecial}&hasNumber=${hasNumber}`
    );
    const response = await fetch(
      `${baseUrl}/generate-password?length=${passwordLength}&hasUpperCase=${hasUpperCase}&hasLowerCase=${hasLowerCase}&hasSpecial=${hasSpecial}&hasNumber=${hasNumber}`
    );
    const password = await response.text();
    passwordDisplay.textContent = password;
  } catch (err) {
    console.error(err);
    passwordDisplay.textContent = "An error occurred, please try again.";
  }
});
