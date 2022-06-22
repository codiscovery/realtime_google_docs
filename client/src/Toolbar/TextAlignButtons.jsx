import { MenuAlt2Icon, MenuAlt3Icon, MenuIcon } from "@heroicons/react/solid";

import ButtonGroup from "../core/ButtonGroup";

const TextStyleButtonGroup = () => {
  const items = [
    { icon: <MenuAlt2Icon className="h-5" /> },
    { icon: <MenuIcon className="h-5" /> },
    { icon: <MenuAlt3Icon className="h-5" /> },
  ];
  return <ButtonGroup items={items} />;
};

export default TextStyleButtonGroup;
