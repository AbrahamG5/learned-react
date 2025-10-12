import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = "p9uUHhXhhMShfVhLGB18wR96ZKcUJU0j";

const createImage = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  const { data }: GiphyRandomResponse = await response.json();
  return data.images.original.url;
};

getRandomGifUrl().then(createImage);
