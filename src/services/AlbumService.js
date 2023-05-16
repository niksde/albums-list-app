const API_HOST = "https://jsonplaceholder.typicode.com";

const corsHeaders = {
  method: "GET",
  mode: "cors",
  headers: { "Content-Type": "application/json" },
};

const fetchAlbums = async () => {
  return await fetch(API_HOST + "/albums", {
    ...corsHeaders,
  }).then((response) => response.json());
};

export { fetchAlbums };
