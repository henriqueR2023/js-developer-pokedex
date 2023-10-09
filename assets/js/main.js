<<<<<<< HEAD
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
=======
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

<<<<<<< HEAD
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `;
=======
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
<<<<<<< HEAD
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
 
=======
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
