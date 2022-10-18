import Item from "./Item";
import { Link, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import useExpansionPanel from "../../hooks/useExpansionPanel";

const [toggle] = useExpansionPanel();

const Navbar = ({ setStatus, setGender, setSpecies }) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link
          to={"/"}
          onClick={() => {
            setStatus(""), setGender(""), setSpecies("");
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            className="navbar__left-logo"
          />
        </Link>
      </div>
      <div className="navbar__right" id="right">
        <div className="navbar__right-list">
          <Link className="link" to={"/episodes/episodes"}>
            <Item title={"Episodes"} className="itemeres" />
          </Link>
          <Link className="link" to={"/location/location"}>
            <Item title={"Location"} className="itemeres" />
          </Link>
        </div>
      </div>
      <div className="navbarFuncionality">
        <FaBars
          className="navbarFuncionality__open"
          id="open"
          onClick={() => toggle("open", "close", "right")}
        />
        <GrClose
          className="navbarFuncionality__close"
          id="close"
          onClick={() => toggle("open", "close", "right")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
