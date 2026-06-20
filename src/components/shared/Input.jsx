const Input = ({
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  error,
}) => (
  <div className="field">
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      placeholder={placeholder}
      type={type}
      className={error ? "input error" : "input"}
    />

    {error && <p className="error-text">{error}</p>}
  </div>
);

export default Input;
