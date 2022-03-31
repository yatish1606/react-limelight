export interface InputProps {
  placeholder?: string;
  type?: string;
  size?: string;
}

const inputSizes = {
  small: {
    height: 40,
  },
  medium: {
    height: 52,
  },
  large: {
    height: 64,
  },
};

function Input({
  placeholder = "",
  type = "text",
  size = "medium",
}: InputProps) {
  const style = {
    height: inputSizes[size],
  };
  return (
    <div className="input-outline" style={{ ...style }}>
      <div className="input-icon-before"></div>
      <input type={type} placeholder={placeholder || ""} />
      <div className="input-icon-after"></div>
    </div>
  );
}

export default Input;
