import { showDialog } from "/common.js";

// fetch all required elements
const form = document.forms[0];

const nameInputList = document.querySelectorAll("#personal-info-set input[type=text]");
const ratingReasonArea = document.querySelector("#rating-info-set textarea");

const usageInfoSet = document.querySelector("#usage-info-set");
const usecaseRadioList = form.elements["usecase"];
const usecaseError = document.querySelector("#usecase-error");

const siteRatingRadioList = form.elements["site-rating"];
const siteRatingError = document.querySelector("#site-rating-error");

const submitBtn = document.querySelector("input[type=submit]");
const resetBtn = document.querySelector("input[type=reset]");

// store all validation handlers
const allValidators = [];

// define input handlers
const nameInputHandler = (event) => {
  const errorElement = event.target.nextElementSibling;
  return runValidators(event.target, [validateTextNotEmpty, validateTextNumeric], errorElement);
};

const usecaseRadioListHandlers = () => {
  displayReasonCard(usecaseRadioList);
  return runValidators(usecaseRadioList, [validateRadio], usecaseError);
};

const siteRatingRadioListHandlers = () => {
  return runValidators(siteRatingRadioList, [validateRadio], siteRatingError);
};

const textAreaListHandler = (event) => {
  const errorElement = event.target.nextElementSibling;
  return runValidators(event.target, [validateTextNotEmpty], errorElement);
}

// connect handlers to event signals
// also add handlers to the handler list
nameInputList.forEach(input => {
  allValidators.push(() => nameInputHandler({ target: input }));
  input.addEventListener("input", nameInputHandler)
});

allValidators.push(usecaseRadioListHandlers);
usecaseRadioList.forEach(
  radio => radio.addEventListener("change", usecaseRadioListHandlers)
);

allValidators.push(siteRatingRadioListHandlers);
siteRatingRadioList.forEach(
  radio => radio.addEventListener("change", siteRatingRadioListHandlers)
);

allValidators.push(() => textAreaListHandler({ target: ratingReasonArea }));
ratingReasonArea.addEventListener("input", textAreaListHandler);

// call all validators on page load
allValidators.forEach(validator => validator());

// connect to reset signal
resetBtn.addEventListener("click", () => {
  // reset form before re-running validators
  // needed because validators would use old data otherwise
  form.reset();
  allValidators.forEach(validator => validator());
});

// connect to submit signal
submitBtn.addEventListener("click", (event) => {
  // run each validation handler
  for (let i = 0; i < allValidators.length; i++) {
    const [success, errorElement] = allValidators[i]();

    // if any validation failed
    if (!success) {
      event.preventDefault(); // don't email form
      // show error dialog
      showDialog("Invalid Inputs!", "Please fix all invalid inputs before trying to submit again.");
      // scroll to first invalid input
      errorElement.scrollIntoView({ block: "center", inline: "center" });
      return;
    }
  }

  // if validation successfull submit
  form.submit();

  // show thank you card after delay
  // needed to allow time for the submission event to actually send the info
  setTimeout(() => {
    const thanksCard = document.createElement("div");

    form.remove();
    thanksCard.classList.add("card", "radio-container");
    thanksCard.textContent = "Thank you for taking your time to provide invaluable feedback to our project!";

    document.querySelector(".content-container h1").textContent = "Thank You!";
    document.querySelector(".content-container").append(thanksCard);
  }, 1000);
});

// validation functions for building handlers
function displayReasonCard(radioList) {
  const radioValue = radioList.value;
  const reasonCard = usageInfoSet.lastElementChild;

  if (radioValue === "other") {
    reasonCard.classList.remove("hide");
  } else {
    reasonCard.classList.add("hide");
  }
}

function validateRadio(radioList) {
  // if none of the options are selected
  if (radioList.value.length === 0) {
    return [false, "An option must be selected!"];
  }

  return [true, null];
}

function validateTextNumeric(element) {
  const text = element.value;

  // check if each character can be a number
  // loop is needed because isNaN will return false
  // even if string contains numbers with other alpha chars
  for (let i = 0; i < text.length; i++) {
    if (!isNaN(text.charAt(i))) {
      return [false, "Input cannot contain numbers!"];
    }
  }

  return [true, null];
}

function validateTextNotEmpty(element) {
  const text = element.value;

  if (text.length === 0) {
    return [false, "Input cannot be empty!"];
  }

  return [true, null];
}

/*
 * run all validators for the corresponding element and
 * set error message if any one fails
 *
 * will return false and the error message element if
 * any one validator fails
 */
function runValidators(element, validations, errorElement) {
  for (let i = 0; i < validations.length; i++) {
    const [success, error] = validations[i](element);

    if (!success) {
      errorElement.textContent = error;
      return [false, errorElement];
    }
  }

  errorElement.textContent = "";
  return [true, null];
}
