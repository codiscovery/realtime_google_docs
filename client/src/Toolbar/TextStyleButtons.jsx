import ButtonGroup from "../core/ButtonGroup";
import { useDispatch } from "react-redux";
import {
  changeBold,
  changeItalic,
  changeUnderline,
} from "../state/reducers/textStyle";

const TextStyleButtonGroup = () => {
  const dispatch = useDispatch();

  const onClickBold = () => {
    dispatch(changeBold());
  };
  const onClickItalic = () => {
    dispatch(changeItalic());
  };
  const onClickUnderline = () => {
    dispatch(changeUnderline());
  };

  const items = [
    {
      name: "B",
      className: "font-bold w-9",
      onClick: onClickBold,
    },
    { name: "I", className: "italic w-9", onClick: onClickItalic },
    { name: "U", className: "underline w-9", onClick: onClickUnderline },
  ];
  return <ButtonGroup items={items} />;
};

export default TextStyleButtonGroup;
