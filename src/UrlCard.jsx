import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCopy } from "@fortawesome/free-solid-svg-icons";

export default function UrlCard(props) {
  const { original, link } = props;

  const copy = async () => {
    await navigator.clipboard.writeText(link);
  };

  return (
    <li className="url-container">
      <div className="url-texts">
        <a href={link}>{link}</a>
        <a href={original}>{original}</a>
      </div>
      <div className="url-actions">
        <FontAwesomeIcon onClick={copy} icon={faCopy} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </li>
  );
}
