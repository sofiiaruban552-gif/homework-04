const MIN_NAME_LENGTH = 2;
const MIN_PASSWORD_LENGTH = 6;

export const validateForm = (form) => {
  const errors = {};

  const name = form.name.trim();
  const email = form.email.trim();
  const password = form.password;

  if (!name) {
    errors.name = "Ім'я є обов'язковим";
  } else if (name.length < MIN_NAME_LENGTH) {
    errors.name = `Ім'я має містити щонайменше ${MIN_NAME_LENGTH} символи`;
  }

  if (!email) {
    errors.email = "Email є обов'язковим";
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.email = "Введіть коректний email";
  }

  if (!password) {
    errors.password = "Пароль є обов'язковим";
  } else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Пароль має містити щонайменше ${MIN_PASSWORD_LENGTH} символів`;
  }

  return errors;
};
