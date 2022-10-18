import Gender from "./Categories/Gender";
import Species from "./Categories/Species";
import Status from "./Categories/Status";

const Filter = ({ setGender, setSpecies, setStatus }) => {
  return (
    <div className="filter">
      <div className="filter__left"></div>
      <div className="filter__right">
        <Gender setGender={setGender} />
        <Species setSpecies={setSpecies} />
        <Status setStatus={setStatus} />
      </div>
    </div>
  );
};

export default Filter;
