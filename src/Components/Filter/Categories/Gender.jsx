import useExpansionPanel from "../../../hooks/useExpansionPanel";
import genderes from "./Seeders/gender";
import { BiDownArrow } from "react-icons/bi";
const Gender = ({ setGender }) => {
  const [toggle] = useExpansionPanel();
  return (
    <div className="categories">
      <div
        className="categories__title"
        onClick={() => toggle("genders", "gender-father")}
        id={"gender-father"}
      >
        Gender <BiDownArrow className="categoriesIcon" />
      </div>
      <fieldset id={"genders"} className="categories__fieldset">
        {genderes?.map((x) => {
          return (
            <div key={x.id}>
              <div className="radiobuttom">
                <input
                  value={x.name === "All" ? "" : x.name}
                  type="radio"
                  name="genderes"
                  id={x.name}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
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

export default Gender;
