// прокидывать пропсы через ...props
function Image(props) {
  return (
    <img {...props} />
  );
}

export default Image;
