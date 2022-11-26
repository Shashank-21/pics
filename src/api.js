//"O0dMV-spV2WoPcQri3JUWUdbKMmKfgk2dGn0hPlT3jM";
// "https://api.unsplash.com/";

import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID O0dMV-spV2WoPcQri3JUWUdbKMmKfgk2dGn0hPlT3jM",
    },
    params: {
      query: term,
      per_page: 25,
    },
  });

  return response.data.results;
};

export default searchImages;
