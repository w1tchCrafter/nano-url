import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "./Header";
import CardContainer from "./CardContainer.jsx";

export default function Home() {
  const [input, setInput] = useState("");
  const [cookieValue, setCookieValue] = useState(Cookies.get("nanourl"));

  useEffect(() => {}, []);

  useEffect(() => {
    Cookies.set("nanourl", cookieValue);
  }, [cookieValue]);

  const submitBtn = async (event) => {
    event.preventDefault();

    try {
      const resp = await fetch("http://localhost:3000/shorten", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ original: input, cookie: true }),
      });

      const json = await resp.json();

      if (cookieValue) {
        const cookieData = JSON.parse(cookieValue);
        cookieData.push(json);
        setCookieValue((c) => (c = JSON.stringify(cookieData)));
      } else {
        setCookieValue((c) => (c = JSON.stringify([json])));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <p>Paste an url to be shortened</p>
        <form onSubmit={submitBtn}>
          <input
            type="text"
            name="url"
            placeholder="Enter your link here"
            onChange={(e) => setInput((i) => (i = e.target.value))}
          />
          <button type="submit">shorten url</button>
        </form>
      </div>
      <CardContainer cookie={cookieValue ? cookieValue : "[]"} />
    </>
  );
}
