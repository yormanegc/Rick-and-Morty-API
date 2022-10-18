import useExpansionPanel from "../../../hooks/useExpansionPanel";
import status from "./Seeders/status";
import { BiDownArrow } from "react-icons/bi";
const Status = ({ setStatus }) => {
  const [toggle] = useExpansionPanel();
  return (
    <div className="categories">
      <div
        className="categories__title"
        onClick={() => toggle("status", "status-father")}
        id={"status-father"}
      >
        Status <BiDownArrow className="categoriesIcon" />
      </div>
      <fieldset className="categories__fieldset" id="status">
        {status?.map((x) => {
          return (
            <div key={x.id}>
              <div className="radiobuttom">
                <input
                  value={x.name === "All" ? "" : x.name}
                  type="radio"
                  name="status"
                  id={x.name}
                  onChange={(e) => setStatus(e.target.value)}
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

export default Status;
