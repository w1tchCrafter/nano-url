export default function UrlCard(props) {
    const {original, link} = props;

    return (
        <li className="url-container">
            <div className="url-texts">
                <p>{link}</p>
                <p>{original}</p>
            </div>
            <div className="url-actions"></div>
        </li>
    );
}
