import { useEffect, useState } from "react";
import UrlCard from "./UrlCard.jsx";

export default function CardContainer(props) {
  const { cookie } = props;
  const [cookieData, setCookieData] = useState([]);

  useEffect(() => {
    setCookieData(JSON.parse(cookie));
  }, [cookie]);

  return (
    <ul className="card-container">
      {cookieData.map((v, i) => (
        <UrlCard original={v.original} link={"http://localhost:3000/" + v.shortened} key={i} />
      ))}
    </ul>
  );
}
