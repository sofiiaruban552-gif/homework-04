import clsx from 'clsx';

const Button = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={clsx('button', className)}
  >
    {label}
  </button>
);

export default Button;
