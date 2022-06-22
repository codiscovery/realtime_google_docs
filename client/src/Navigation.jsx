import Toolbar from "./Toolbar";

const Navigation = () => {
  return (
    <div className="bg-base-100 flex items-center py-4 px-10 shadow-sm">
      <h1 className="text-xl font-semibold">Codiscovery Docs</h1>
      <div className="grow flex justify-center">
        <Toolbar />
      </div>
      {/* <Button /> */}
    </div>
  );
};

export default Navigation;
