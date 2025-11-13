import React, { useEffect, useState } from "react";
import axios from "axios";

function Apicalling() {
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const API = "https://api.imgflip.com/get_memes";

    async function fetchData() {
      try {
        const resp = await axios.get(API);
        // the array of memes is inside resp.data.data.memes
        setAllMemes(resp.data.data.memes);
      } catch (error) {
        console.error("Error fetching meme data:", error);
      }
    }

    fetchData();
  }, []);

  return allMemes;
}

export default Apicalling;
