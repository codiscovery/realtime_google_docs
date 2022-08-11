import { useDispatch } from "react-redux";
import { ColorSwatchIcon } from "@heroicons/react/solid";
import { changeColor } from "../state/reducers/textStyle";
import ButtonGroupItem from "../core/ButtonGroupItem";

const ColorPicker = () => {
  const dispatch = useDispatch();

  const colors = [
    "#000000",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];

  const dropdownClasses = [
    "dropdown-content",
    "border",
    "border-primary-focus/20",
    "mt-2",
    "bg-base-100",
    "p-2",
    "flex",
    "flex-wrap",
    "gap-5",
    "w-64",
    "justify-center",
    "shadow-xl",
    "rounded-lg",
  ];
  const onChangeColor = (color) => {
    // console.log("onChange color", color);
    dispatch(changeColor(color));
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0">
        <ButtonGroupItem
          icon={<ColorSwatchIcon className="h-5" />}
        ></ButtonGroupItem>
      </label>
      <div className={dropdownClasses.join(" ")}>
        {colors.map((color, index) => {
          return (
            <button
              className="w-10 h-10 rounded-full"
              onClick={() => onChangeColor(color)}
              key={index}
              style={{
                backgroundColor: color,
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
