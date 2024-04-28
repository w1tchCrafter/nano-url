import { useEffect, useState } from "react";
import UrlCard from "./UrlCard.jsx";

export default function CardContainer(props) {
  const { cookie } = props;
  const [cookieData, setCookieData] = useState([]);

  useEffect(() => {
    if (cookie !== undefined) {
      setCookieData(JSON.parse(cookie));
    }
  }, []);

  useEffect(() => {
    console.log("From card container:", cookie);
  }, [cookie]);

  return (
    <ul>
      {cookieData.map((v, i) => (
        <UrlCard original={v.original} link={v.shortened} key={i} />
      ))}
    </ul>
  );
}
