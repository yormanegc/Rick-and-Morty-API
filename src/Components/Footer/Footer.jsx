import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillBehanceCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="sociallinks">
        <a
          href="https://www.behance.net/yormangonzalezfresh"
          target={"_blank"}
          className="sociallinks__items"
        >
          <AiFillBehanceCircle /> Behance
        </a>
        <a
          href="https://www.linkedin.com/in/yorman-gonzalez-180959164/"
          target={"_blank"}
          className="sociallinks__items"
        >
          <AiFillLinkedin /> Linkedin
        </a>
        <a
          href="https://github.com/yormanegc"
          target={"_blank"}
          className="sociallinks__items"
        >
          <AiFillGithub /> Github
        </a>
      </div>
      <div>Copyright Yorman Gonzalez</div>
    </footer>
  );
};

export default Footer;
