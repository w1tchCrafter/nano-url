import React, { useState } from "react";

export default function Home() {
    let [input, setInput] = useState("");

    const submitBtn = (event) => {
        event.preventDefault();
        console.log(input);
    };

    return (
        <>
            <nav>
                <label className="logo">Nano Url</label>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Docs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="container">
                <p>Paste an url to be shortened</p>
                <form onSubmit={submitBtn}>
                    <input type="text" name="url" placeholder="Enter your link here"
                        onChange={(e) => setInput(i => i = e.target.value)}
                    />
                    <button type="submit">shorten url</button>
                </form>
            </div>
        </>
    );
}
