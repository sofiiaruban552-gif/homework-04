const Input = ({
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  type = "text",
  error,
}) => {
  return (
    <div className="form-group">
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`input ${error ? "input-error" : ""}`}
      />

      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
