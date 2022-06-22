import ButtonGroup from "../core/ButtonGroup";

const TextStyleButtonGroup = () => {
  const items = [
    { name: "B", className: "font-bold" },
    { name: "I", className: "italic" },
    { name: "U", className: "underline" },
  ];
  return <ButtonGroup items={items} />;
};

export default TextStyleButtonGroup;
