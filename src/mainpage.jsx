import { useState, useEffect } from "react";
// import Data from "./data";

const MainPage = () => {
  // const [url, setUrl] = useState("https://i.imgflip.com/30b1gx.jpg");
  const [fetchedMemes,setFetchedMemes]=useState([])

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setFetchedMemes(data.data.memes));
  }, []);
  function handleClick() {
    // const MemeData = meme;
    let randomUrl = Math.floor(Math.random() * fetchedMemes.length);
    setMeme((prev) => {
      return {
        ...prev,
        memeImage: fetchedMemes[randomUrl].url,
      };
    });
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 pt-5">
        <div>
          <label>
            Top text
            <input
              type="text"
              className="border-2 shadow-sm rounded-md text-base  py-1 px-2 w-[222px]"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Bottom text
            <input
              type="text"
              className="border-2 shadow-sm rounded-md text-base  py-1 px-2 w-[222px]"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="w-[477px] text-white py-2 rounded-md mt-5 bg-gradient-to-r from-[#672280] to-[#A626D3]"
      >
        Get a new meme image 🖼
      </button>
      <div className="relative w-full">
        <p className="absolute top-1 text-center w-full font-bold text-3xl text-white">
          {meme.topText}
        </p>
        <img className=" my-5 " src={meme.memeImage} />
        <p className="absolute bottom-1 text-center w-full font-bold text-3xl text-white">
          {meme.bottomText}
        </p>
      </div>
    </div>
  );
};

export default MainPage;
