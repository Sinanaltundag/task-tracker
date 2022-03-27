const Button = (props) => {
  return (
    <div>
      <button onClick={props.click}>{props.btnName}</button>
    </div>
  );
};

export default Button;
