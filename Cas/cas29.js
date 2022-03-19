window.onload = async function () {
  let pokemonResource = {};
  let pokemonArr = [];
  const pokemoninfo = [];

  const getPokeList = async () => {
    try {
      const r = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10"
      );
      const res = await r.json();
      pokemonResource = res;
    } catch (error) {
      console.log(error);
    }
  };
  const getPokemon = async (URL) => {
    try {
      const p = await fetch(URL);
      const pokemon = await p.json();
      console.log(pokemon);
      pokemoninfo.push(pokemon);
    } catch (error) {
      console.log(error);
    }
  };

  await getPokeList();

  pokemonArr = pokemonResource.results.map((p) => {
    return getPokemon(p.url);
  });

 await Promise.all(pokemonArr)
};
