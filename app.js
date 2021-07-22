// Declaracion de variables
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("passwordRepeat");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  // El método trim() elimina los espacios en blanco en ambos extremos del string
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordRepeatValue = passwordRepeat.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "El campo email se encuentra vacio.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "El email ingresado no es válido");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "El campo contraseña se encuentra vacio.");
  } else if (passwordValue.length < 8) {
    setErrorFor(
      password,
      "La contraseña debe ser de al menos 8 caracteres de largo."
    );
  } else {
    setSuccessFor(password);
  }

  if (passwordRepeatValue === "") {
    setErrorFor(
      passwordRepeat,
      "el campo repetir contraseña se encuentra vacio."
    );
  } else if (passwordValue !== passwordRepeatValue) {
    setErrorFor(passwordRepeat, "Las contraseñas no coinciden");
  } else {
    setSuccessFor(passwordRepeat);
  }
}

// Funcion que nos mostrara el error correspondiente.
// Extraemos el input correspondiente del formulario.
// Seleccionamos la etiqueta small desde el formulario
// que sera la que nos mostrara el error.
// le asignamos la clase de css form-container.error para hacerlo visible
// y mostramos el mensaje que estamos enviando como parametro.
function setErrorFor(input, msj) {
  const formControl = input.parentElement;
  const message = formControl.querySelector("small");
  formControl.className = "form-container error";
  message.innerText = msj;

  // https://www.javascripttutorial.net/javascript-dom/javascript-classname/
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-container success";
}

// para validar el email ocupe expresiones regulares.
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
