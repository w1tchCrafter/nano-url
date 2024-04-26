import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import UrlCard from "./UrlCard.jsx";

export default function CardContainer() {
    const [cookieValue, setCookieValue] = useState(Cookies.get("nanourl"));
    const [elements, setElements] = useState([]);

    const updateCookieValue = () => {
        const newValue = Cookies.get("nanourl");
        setCookieValue(newValue);
    };

    // update cookie value when the component mounts
    useEffect(() => {
        console.log("Rendering card itens:", cookieValue);
        updateCookieValue();
    }, []);

    useEffect(() => {
        if (cookieValue) {
            console.log("Re rendering card itens:", cookieValue);
            const NewListItem = <UrlCard key={elements.length} link={cookieValue.original} original={cookieValue.shortened}/>
            setElements(e => e = [...e, NewListItem]);
        }
    }, [cookieValue]);

    return (
        <div>
            <ul>
                {elements.forEach((value, index) => {
                    return (<UrlCard key={index} link={value.original} original={value.shortened}/>)
                })}
            </ul>
        </div>
    );
}
