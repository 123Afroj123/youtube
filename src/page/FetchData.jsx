import React from 'react'

const FetchData = async () => {
    try {
      const res = await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBiCiu2lgHQx3enS3tWNBpg6gvytJLkr9U&channelId=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet%2Cid&order=date&maxResults=50&pageToken=CDIQAA",
        { method: "GET" }
      );
      if (!res.ok) {
        console.error("Error fetching data:", res.statusText);
      } else {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


export default FetchData


// import React, { useState } from 'react';

// const FetchData = async () => {
//     const [isFetching, setIsFetching] = useState(false);

//     if (isFetching) return; // Prevent multiple fetch calls

//     setIsFetching(true);

//     try {
//         const res = await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBiCiu2lgHQx3enS3tWNBpg6gvytJLkr9U&channelId=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet%2Cid&order=date&maxResults=20&pageToken=CDIQAA", {
//             method: "GET"
//         });
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     } finally {
//         setIsFetching(false);
//     }
// };

// export default FetchData;

