import { useState } from "react";
import SectionCard from "./shared/SectionCard";
import Input from "./shared/Input";
import Button from "./shared/Button";
import { validateForm } from "../helpers/validation";

const EMPTY_FORM = {
  name: "",
  email: "",
  password: "",
};

const ALL_TOUCHED = {
  name: true,
  email: true,
  password: true,
};

const RegisterForm = () => {
  const [form, setForm] = useState(EMPTY_FORM);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState("");

  const runValidation = () => {
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    
    return validationErrors;
  };

  const hasErrors = (errors) => Object.keys(errors).length > 0;

  const isFormValid = !hasErrors(validateForm(form));

  const handleChange = (field) => (value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));

    runValidation();
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = runValidation();

  if (hasErrors(validationErrors)) {
    setTouched(ALL_TOUCHED);
    setSuccess("");
    return;
  }

  setSuccess("Готово ✅");
  setForm(EMPTY_FORM);
  setTouched({});
  setErrors({});
};

  return (
    <SectionCard>
      <h2 className="section-title">Form</h2>
      <h3 className="section-subtitle">
        Registration Form with Input Validation
      </h3>

      {success && <p>{success}</p>}

      <form onSubmit={handleSubmit} className="form">
        <Input
          value={form.name}
          placeholder="Name"
          onChange={handleChange("name")}
          onBlur={handleBlur("name")}
          error={touched.name && errors.name}
        />

        <Input
          type="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          error={touched.email && errors.email}
        />

        <Input
          type="password"
          value={form.password}
          placeholder="Password"
          onChange={handleChange("password")}
          onBlur={handleBlur("password")}
          error={touched.password && errors.password}
        />

        <Button type="submit" label="Register" disabled={!isFormValid} />
      </form>
    </SectionCard>
  );
};

export default RegisterForm;
