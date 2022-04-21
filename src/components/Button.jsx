const Button = ({ children, color, textColor, width }) => {
  return <button className={`px-10 py-2 ${color} ${textColor} ${width} rounded-full font-semibold uppercase`}>{children}</button>;
};

export default Button;
