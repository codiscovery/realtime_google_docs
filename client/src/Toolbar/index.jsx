import TextStyleButtons from "./TextStyleButtons";
import TextAlignButtons from "./TextAlignButtons";
const Toolbar = () => {
  return (
    <div className="flex justify-center gap-4 w-full">
      <TextStyleButtons />
      <TextAlignButtons />
      <div className="text-align-group[L-C-R]"></div>
      <div className="font-group[select-size]"></div>
    </div>
  );
};

export default Toolbar;
