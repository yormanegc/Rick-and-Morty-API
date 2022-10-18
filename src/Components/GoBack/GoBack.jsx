import { BiLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const GoBack = ({ url }) => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to={url} className="header__left-link">
          <BiLeftArrow className="header__left-link-icon" />
        </Link>
      </div>
      <div className="header__right"></div>
    </div>
  );
};

export default GoBack;
