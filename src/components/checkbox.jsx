export default function CheckBox({text, ...rest}) {
  return (
    <label>
      <input type="checkbox" {...rest}/> <span>     {text}</span>
    </label>
  );
}
