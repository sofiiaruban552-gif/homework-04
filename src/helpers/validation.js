const MIN_NAME_LENGTH = 2;
const MIN_PASSWORD_LENGTH = 6;

export const validateForm = (form) => {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Ім'я є обов'язковим";
  } else if (form.name.trim().length < MIN_NAME_LENGTH) {
    errors.name = "Ім'я має містити щонайменше 2 символи";
  }

  if (!form.email.trim()) {
    errors.email = "Email є обов'язковим";
  } else if (!form.email.includes("@") || !form.email.includes(".")) {
    errors.email = "Введіть коректний email";
  }

  if (!form.password) {
    errors.password = "Пароль є обов'язковим";
  } else if (form.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = "Пароль має містити щонайменше 6 символів";
  }

  return errors;
};
