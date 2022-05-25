const Button = ({
  className, clickHandler = null, label, children
}) => {
  return (
    <button
      className={className}
      type='button'
      onClick={clickHandler}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}

export default Button;