import ButtonGroupItem from "./ButtonGroupItem";

const ButtonGroup = ({ items }) => {
  return (
    <div className="btn-group">
      {items.map((item, index) => (
        <ButtonGroupItem key={item.name || index} {...item} />
      ))}
    </div>
  );
};

export default ButtonGroup;
