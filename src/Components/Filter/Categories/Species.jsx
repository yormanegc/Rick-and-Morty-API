import useExpansionPanel from "../../../hooks/useExpansionPanel";
import species from "./Seeders/species";
import { BiDownArrow } from "react-icons/bi";
const Species = ({ setSpecies }) => {
  const [toggle] = useExpansionPanel();
  return (
    <div className="categories">
      <div
        className="categories__title"
        onClick={() => toggle("species", "species-father")}
        id={"species-father"}
      >
        Species <BiDownArrow className="categoriesIcon" />
      </div>
      <fieldset className="categories__fieldset" id="species">
        {species?.map((x) => {
          return (
            <div key={x.id}>
              <div className="radiobuttom">
                <input
                  value={x.name === "All" ? "" : x.name}
                  type="radio"
                  name="especies"
                  id={x.name}
                  onChange={(e) => setSpecies(e.target.value)}
                  className="radioInput"
                />
                <label htmlFor={x.name}>{x.name}</label>
              </div>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

export default Species;
