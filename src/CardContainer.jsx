import { useEffect, useState } from "react";
import UrlCard from "./UrlCard.jsx";

export default function CardContainer(props) {
  const { cookie } = props;
  const [cookieData, setCookieData] = useState([]);

  useEffect(() => {
    setCookieData(JSON.parse(cookie));
  }, [cookie]);

  return (
    <ul>
      {cookieData.map((v, i) => (
        <UrlCard original={v.original} link={v.shortened} key={i} />
      ))}
    </ul>
  );
}
