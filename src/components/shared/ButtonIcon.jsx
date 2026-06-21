const ButtonIcon = ({ onClick, icon }) => {
  return (
    <button type="button" onClick={onClick} className="button-icon">
      {icon}
    </button>
  );
};
export default ButtonIcon;
