const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/1");

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(response);
});
