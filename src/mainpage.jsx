import { useState } from "react";
import Data from "./data"

const MainPage = () => {
    const [url,setUrl]=useState("https://i.imgflip.com/30b1gx.jpg")
    const [meme,setMeme]=useState({
      topText:'',
      bottomText:'',
      memeImage:"https://i.imgflip.com/30b1gx.jpg"
    })
    function handleClick(){
const MemeData=Data.data.memes
let randomUrl=Math.floor(Math.random()* MemeData.length)
setMeme((prev)=>{
  return {
    ...prev,
    memeImage:MemeData[randomUrl].url
  }
})
    }
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 pt-5">
        <div>
          <label>Top text
          <input
            type="text"
            className="border-2 shadow-sm rounded-md text-base  py-1 px-2 w-[222px]"
            placeholder="Shut up"
          />
          </label>
          
        </div>
        <div>
          <label>Bottom text
          <input
            type="text"
            className="border-2 shadow-sm rounded-md text-base  py-1 px-2 w-[222px]"
            placeholder="And take my money"
          />
          </label>
         
        </div>
      </div>
      <button onClick={handleClick} className="w-[477px] text-white py-2 rounded-md mt-5 bg-gradient-to-r from-[#672280] to-[#A626D3]">
        Get a new meme image 🖼
      </button>
      <div className="relative h-[268px] grid grid-cols-1 my-10">
<img src={meme.memeImage} />
      </div>
    </div>
  );
};

export default MainPage;
