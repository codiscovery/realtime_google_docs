const ButtonGroupItem = ({ name = "", icon = null, className = "" }) => {
  let Child = name;
  if (!name) {
    Child = <>{icon}</>;
  }
  const defaultClasses =
    "btn hover:bg-base-300 hover:text-neutral text-xl bg-base-100 text-base-content font-bold".split(
      " "
    );
  const classes = defaultClasses.concat(className.split(" "));
  return <button className={classes.join(" ")}>{Child}</button>;
};

export default ButtonGroupItem;
