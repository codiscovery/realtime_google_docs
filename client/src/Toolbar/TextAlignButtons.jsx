import { MenuAlt2Icon, MenuAlt3Icon, MenuIcon } from "@heroicons/react/solid";

import ButtonGroup from "../core/ButtonGroup";

import { useDispatch } from "react-redux";
import { changeAlignment } from "../state/reducers/textStyle";

const TextStyleButtonGroup = () => {
  const dispatch = useDispatch();

  const onClickAlignLeft = () => {
    dispatch(changeAlignment("left"));
  };
  const onClickAlignCenter = () => {
    dispatch(changeAlignment("center"));
  };
  const onClickAlignRight = () => {
    dispatch(changeAlignment("right"));
  };

  const items = [
    { icon: <MenuAlt2Icon className="h-5" />, onClick: onClickAlignLeft },
    { icon: <MenuIcon className="h-5" />, onClick: onClickAlignCenter },
    { icon: <MenuAlt3Icon className="h-5" />, onClick: onClickAlignRight },
  ];
  return <ButtonGroup items={items} />;
};

export default TextStyleButtonGroup;
