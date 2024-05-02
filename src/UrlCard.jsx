import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CookieContext } from "./Home";

export default function UrlCard(props) {
  const [cookie, setCookie] = useContext(CookieContext);
  const { original, link } = props;

  const copy = async () => {
    await navigator.clipboard.writeText(link);
  };

  const toTrash = async () => {
    const jsonCookie = JSON.parse(cookie);
    const newCookie = jsonCookie.filter(
      (v) => v.original !== original && v.shortened !== link
    );
    setCookie((c) => (c = JSON.stringify(newCookie)));
  };

  return (
    <li className="url-container">
      <div className="url-texts">
        <a href={link}>{link}</a>
        <a href={original}>{original}</a>
      </div>
      <div className="url-actions">
        <FontAwesomeIcon onClick={copy} icon={faCopy} />
        <FontAwesomeIcon onClick={toTrash} icon={faTrash} />
      </div>
    </li>
  );
}
