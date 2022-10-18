const Parameter = ({ parameter }) => {
  return (
    <div className="parameter">
      <h1
        className={
          parameter === "Alive"
            ? "parameter__green"
            : parameter === "Dead"
            ? "parameter__red"
            : "parameter__grey"
        }
      >
        {parameter}
      </h1>
    </div>
  );
};
export default Parameter;
