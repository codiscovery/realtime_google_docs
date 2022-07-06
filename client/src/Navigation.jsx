import Toolbar from "./Toolbar";
import { AdjustmentsIcon } from "@heroicons/react/solid";

const Navigation = () => {
  return (
    <div className="bg-base-100 flex items-center py-4 px-0 md:px-2 lg:px-10 shadow-sm">
      <h1 className="text-xl font-semibold text-primary">Codiscovery Docs</h1>
      <div className="grow flex justify-center">
        <Toolbar />
      </div>
      <button className="btn btn-primary">Log in</button>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn m-1">
          <AdjustmentsIcon className="h-5" />
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content h-96 overflow-scroll menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {[
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
          ].map((item) => (
            <li key={item}>
              <a
                onClick={() =>
                  (document.querySelector("html").dataset.theme = item)
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
