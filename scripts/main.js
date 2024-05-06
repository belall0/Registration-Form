// ******************************************************************
// Selecting Form Elements
// ******************************************************************
const formEl = document.querySelector("#form");
const inputFieldsEl = document.querySelectorAll(".input-field");
const inputsContainer = new Map();

const getInputFieldName = function (el) {
  const elClassList = el.classList;
  let inputName = "";

  // get the input name
  for (const str of elClassList) {
    if (str.match(/input-field--/)) {
      inputName = str.split("--")[1];
      break;
    }
  }

  return inputName;
};

for (const el of inputFieldsEl) {
  const inputName = getInputFieldName(el);
  inputsContainer.set(inputName, el);
}
// ******************************************************************
// Utility Functions
// ******************************************************************
const setValidEffect = function (inputFieldContainer) {
  // change the input field style
  const inputField = inputFieldContainer.querySelector("input");
  inputField.classList.add("valid");
  inputField.classList.remove("invalid");

  // remove feedback message if exists
  const feedbackEl = inputFieldContainer.querySelector(".feedback");
  if (feedbackEl) {
    feedbackEl.remove();
  }
};

const setInvalidEffect = function (inputFieldContainer, feedbackMessage) {
  // change the input field style
  const inputField = inputFieldContainer.querySelector("input");
  inputField.classList.add("invalid");
  inputField.classList.remove("valid");

  // create feedback message if not exists
  if (inputFieldContainer.querySelector(".feedback")) {
    return;
  }

  const feedbackEl = document.createElement("div");
  const classes = "form-text text-danger feedback";
  feedbackEl.className = classes;
  feedbackEl.textContent = feedbackMessage;
  inputFieldContainer.insertAdjacentElement("beforeend", feedbackEl);
};

// ******************************************************************
// Form Validation
// ******************************************************************
formEl.addEventListener("submit", (e) => {
  if (!isValidInputFields()) {
    e.preventDefault();
  }
});

const isValidInputFields = function () {
  const fullNameStatus = isValidFullName();
  const userNameStatus = isValidUserName();
  const emailStatus = isValidEmail();
  const dateStatus = isValidDate();
  const phoneStatus = isValidPhone();
  const addressStatus = isValidAddress();
  const passwordStatus = isValidPassword();
  const confirmPasswordStatus = isValidConfirmPassword();
  const imageStatus = isValidImageFile();

  return (
    fullNameStatus &&
    userNameStatus &&
    emailStatus &&
    dateStatus &&
    phoneStatus &&
    addressStatus &&
    passwordStatus &&
    confirmPasswordStatus &&
    imageStatus
  );
};

const isValidFullName = function () {
  const inputContainer = inputsContainer.get("fullname");
  const fullNameValue = inputContainer.querySelector("input").value.trim();

  // check if valid or not
  if (fullNameValue.length > 3 && fullNameValue.match(/^[a-zA-Z\s]+$/)) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Please enter a valid full name.");
    return false;
  }
};

const isValidUserName = function () {
  const inputContainer = inputsContainer.get("username");
  const userNameValue = inputContainer.querySelector("input").value.trim();

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://localhost/fcai-project/inc/username-validation.php?username=${userNameValue}`, false);
  xhr.send();
  const [usernameStatus] = JSON.parse(xhr.responseText);

  if (usernameStatus === "taken") {
    setInvalidEffect(inputContainer, "That username is taken. Try another.");
    return false;
  }
  // check if valid or not
  if (userNameValue.length > 3 && userNameValue.match(/^[a-zA-Z0-9]+$/)) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Please enter a valid username.");
    return false;
  }
};

const isValidEmail = function () {
  const inputContainer = inputsContainer.get("email");
  const emailValue = inputContainer.querySelector("input").value.trim();

  // check if valid or not
  if (emailValue.match(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/)) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Please enter a valid email.");
    return false;
  }
};

const isValidDate = function () {
  const inputContainer = inputsContainer.get("birthday");
  const dateValue = new Date(inputContainer.querySelector("input").value.trim());
  const currentDate = new Date();

  if (!isNaN(dateValue) && dateValue < currentDate) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Please enter a valid date.");
    return false;
  }
};

const isValidPhone = function () {
  const inputContainer = inputsContainer.get("phone");
  const phoneValue = inputContainer.querySelector("input").value.trim();

  if (phoneValue.match(/^01[0125][0-9]{8}$/)) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Please enter a valid phone number.");
    return false;
  }
};

const isValidAddress = function () {
  const inputContainer = inputsContainer.get("address");
  const addressValue = inputContainer.querySelector("input").value.trim();

  if (addressValue.length > 3) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Please enter a valid address.");
    return false;
  }
};

const isValidPassword = function () {
  const inputContainer = inputsContainer.get("password");
  const passwordValue = inputContainer.querySelector("input").value.trim();

  if (passwordValue.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Please enter a valid password.");
    return false;
  }
};

const isValidConfirmPassword = function () {
  const passwordValue = inputsContainer.get("password").querySelector("input").value.trim();

  const inputContainer = inputsContainer.get("confirmPassword");
  const confirmPasswordValue = inputContainer.querySelector("input").value.trim();

  if (passwordValue === confirmPasswordValue && passwordValue.length > 0 && isValidPassword()) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Confirm password does not match the password entered. Please try again.");
    return false;
  }
};

const isValidImageFile = function () {
  const inputContainer = inputsContainer.get("imageInput");
  const fileInfo = inputContainer.querySelector("input").files[0];

  // check if user uploaded a file or not
  if (fileInfo === undefined) {
    setInvalidEffect(inputContainer, "Please upload an image file.");
    return false;
  }

  // check if the uploaded file is an image or not
  if (fileInfo.type.includes("image")) {
    setValidEffect(inputContainer);
    return true;
  } else {
    setInvalidEffect(inputContainer, "Please upload a valid image file.");
  }
};

// ******************************************************************
// Fetch API
// ******************************************************************
const birthdayEl = inputsContainer.get("birthday").querySelector("input");
birthdayEl.addEventListener("blur", () => {
  const day = birthdayEl.value.split("-")[2];
  const month = birthdayEl.value.split("-")[1];

  // testing --------------------------------------------------------------------------------------
  const url = `https://imdb8.p.rapidapi.com/actors/v2/get-born-today?today=${month}-${day}&first=3`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d07a7cb903msha94280f433a0699p1933f7jsnf3339c8a8218",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => {
      return res.json();
    })
    .then((resObj) => {
      const ids = resObj.data.bornToday.edges.map((obj) => obj.node.id);

      let fetchPromises = [];

      for (const id of ids) {
        const url = `https://imdb8.p.rapidapi.com/actors/v2/get-bio?nconst=${id}`;
        fetchPromises.push(fetch(url, options));
      }
      // return Promise.all(fetchPromises);
      return Promise.all(fetchPromises);
    })
    .then((res) => {
      // get the json format of all promises
      return Promise.all(res.map((response) => response.json()));
    })
    .then((names) => {
      names = names.map((obj) => obj.data.name.nameText.text);

      // handel putting names
      insertActors(names);
    });
});

const insertActors = function (actors) {
  const actorsList = document.querySelector(".actors-list");
  // make it empty
  actorsList.textContent = "";

  const actorElements = actors.map((actorName) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between lh-sm";

    const el = document.createElement("h6");
    el.className = "my-0";
    el.textContent = `${actorName}`;

    listItem.insertAdjacentElement("beforeend", el);
    actorsList.insertAdjacentElement("beforeend", listItem);
  });
};
