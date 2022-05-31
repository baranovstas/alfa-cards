// label заменить на title, использовать оригинальные названия, если они просто прокидываются дальше
function Button({ children, ...props }) {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  );
}

export default Button;
