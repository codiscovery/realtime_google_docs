import TextStyleButtons from "./TextStyleButtons";
import TextAlignButtons from "./TextAlignButtons";
import ColorPicker from "./ColorPicker";

const Toolbar = () => {
  return (
    <div className="flex justify-center gap-4 w-full">
      <TextStyleButtons />
      <TextAlignButtons />
      <ColorPicker />
      <div className="font-group[select-size]"></div>
    </div>
  );
};

export default Toolbar;
