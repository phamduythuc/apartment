export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const reponse = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": "794012d540msh1e91fe1e63ed219p17d8ecjsne77799143c6c",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  const data = reponse.json();

  return data;
};
