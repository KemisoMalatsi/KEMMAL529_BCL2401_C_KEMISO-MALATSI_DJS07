import React from "react"
import memesData from "../memesData"

export default function Meme () {

    let url;

    function getMemeImage () {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomNumber].url;
        console.log(url);
    }

    return (
        <main>
            <div className="form">
                <input
                    id="top-text"
                    type= "text"
                    placeholder="Top text" 
                    className="form--input"
                />
                <input type= "text"
                    placeholder="bottom text" 
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick = {getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}