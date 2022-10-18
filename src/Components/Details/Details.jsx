import useExpansionPanel from "../../hooks/useExpansionPanel";
import { BiDownArrow } from "react-icons/bi";
const Details = ({ total, setId, name }) => {
  const [toggle] = useExpansionPanel();
  return (
    <div>
      <div className="select__button" onClick={() => toggle("options", "icon")}>
        <p>{name}</p>
        <BiDownArrow className="categoriesIcon" id="icon" />
      </div>
      <div className="select">
        <div className="select__option" id="options">
          {[...Array(total).keys()].map((x) => {
            return (
              <div
                key={x + 1}
                value={x + 1}
                onClick={() => setId(x + 1)}
                className="select__option-item"
              >
                {name} {x + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
