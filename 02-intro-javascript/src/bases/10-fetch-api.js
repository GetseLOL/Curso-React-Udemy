// fetch api
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apiKey = "C7toUwEkdqVsSgj8JyckRvgPMslJzzt9";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((res) => res.json())
  .then(data => {
    const { url } = data.data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
