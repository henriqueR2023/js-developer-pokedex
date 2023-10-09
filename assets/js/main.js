// main.js

const pokemonListLi = document.getElementById('pokemonListLI');
const loadMoreButton = document.getElementById('loadMoreButton');
const loadMoreButton2 = document.getElementById('loadMoreButton2');
const maxRecords = 151;
const limit = 10;
let offset = 0;
let divCounter = 1;

function convertPokemonToLi(pokemon,) {
    const liId = `${divCounter}`;
    divCounter++;
    return `
        <li id="${liId}" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons.map(convertPokemonToLi).join('');
      pokemonListLi.innerHTML += newHtml;
  
      const pokemonItems = pokemonListLi.querySelectorAll('.pokemon');
      pokemonItems.forEach((item, index) => {
        item.addEventListener('click', () => {
          loadSinglePokemon(offset + index, item.id); // Passar o ID do elemento clicado
        });
      });
    });
  }
  

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});
 