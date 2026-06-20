import { useState } from "react";
import SectionCard from "./shared/SectionCard";
import Input from "./shared/Input";
import Button from "./shared/Button";
import { validateForm } from "../helpers/validation";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState("");

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
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateForm(form);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      setSuccess("Готово ✅");

      setForm({
        name: "",
        email: "",
        password: "",
      });

      setTouched({});
    } else {
      setSuccess("");
    }
  };
  const isFormValid = Object.keys(errors).length === 0;

  return (
    <SectionCard>
      <h2 className="section-title">Form</h2>
      <h3 className="section-subtitle">
        Registration Form with Input Validation
      </h3>

      {success && <p className="success">{success}</p>}

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
