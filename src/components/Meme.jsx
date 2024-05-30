import React from "react"
import memesData from "../memesData"

export default function Meme () {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")




    function getMemeImage () {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage (memesArray[randomNumber].url)

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
            <img src={memeImage} className="meme--image"/>
        </main>
    )
}