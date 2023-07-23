import { showDialog } from "../common.js";

const form = document.forms[0];

const usageInfoSet = document.querySelector("#usage-info-set");
const usecaseRadioList = form.elements["usecase"];
const usecaseError = document.querySelector("#usecase-error");

const siteRatingRadioList = form.elements["site-rating"];
const siteRatingError = document.querySelector("#site-rating-error");

const nameInputList = document.querySelectorAll("#personal-info-set input[type=text]");
const ratingReasonArea = document.querySelector("#rating-info-set textarea");

const submitBtn = document.querySelector("input[type=submit]");
const resetBtn = document.querySelector("input[type=reset]");

const allValidators = [];
let isReasonCardShown = false;

// Define input handlers
const usecaseRadioListHandlers = () => {
  displayReasonCard(usecaseRadioList);
  return runValidators(usecaseRadioList, [validateRadio], usecaseError);
};

const siteRatingRadioListHandlers = () => {
  return runValidators(siteRatingRadioList, [validateRadio], siteRatingError);
};

const nameInputHandler = (event) => {
  const errorElement = event.target.nextElementSibling;
  return runValidators(event.target, [validateTextNotEmpty, validateTextNumeric], errorElement);
};

const textAreaListHandler = (event) => {
  const errorElement = event.target.nextElementSibling;
  return runValidators(event.target, [validateTextNotEmpty], errorElement);
}

// Connect handlers to event signals
allValidators.push(usecaseRadioListHandlers);
usecaseRadioList.forEach(
  radio => radio.addEventListener("change", usecaseRadioListHandlers)
);

allValidators.push(siteRatingRadioListHandlers);
siteRatingRadioList.forEach(
  radio => radio.addEventListener("change", siteRatingRadioListHandlers)
);

nameInputList.forEach(input => {
  allValidators.push(() => nameInputHandler({ target: input }));
  input.addEventListener("input", nameInputHandler)
});

allValidators.push(() => textAreaListHandler({ target: ratingReasonArea }));
ratingReasonArea.addEventListener("input", textAreaListHandler);

// call all validators on page load
allValidators.forEach(validator => validator());

// connect to reset signal
resetBtn.addEventListener("click", () => {
  form.reset();
  allValidators.forEach(validator => validator());
});

// connect to submit signal
submitBtn.addEventListener("click", (event) => {
  for (let i = 0; i < allValidators.length; i++) {
    const [success, errorElement] = allValidators[i]();
    if (!success) {
      event.preventDefault();
      showDialog("Invalid Inputs!", "Please fix all invalid inputs before trying to submit again.");
      errorElement.scrollIntoView({ block: "center", inline: "center" });
      return;
    }
  }
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
  if (radioList.value.length === 0) {
    return [false, "An option must be selected!"];
  }

  return [true, null];
}

function validateTextNumeric(element) {
  const text = element.value;

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
