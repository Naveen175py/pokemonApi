document.querySelector("#search").addEventListener("click", getPokemon);
document.querySelector("#Explore").addEventListener("click", nowPokemon);
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  let name = document.querySelector("#pokemonName").value;
  let pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      
      document.querySelector(".pokemonBox").innerHTML = `
      
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
  
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Weight: ${data.weight}</p>

        <p>Height: ${data.height}</p>
        <p>ID: ${data.id}</p>
      </div>
      
      `;

    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}


function nowPokemon() {
  var pokemonArray = ['bulbasaur','ivysaur','venusaur', 'squirtle', 'wartortle', 'blastoise',
                   'charmander','charmeleon', 'charizard', 'Kleavor','Samurott', 'Noivern',
                   'Torterra','Zangoose', 'Zangoose','Zapdos','Zebstrika','Zekrom','Zigzagoon','Zoroark'
                   ,'Zorua','Zubat','Natu','Nidoking','Nidoqueen','Nidorina','Nidorino','Nincada',
                   'Lairon','Lampent', 'Landorus','Lanturn','Lapras','Larvesta','Larvitar','Latias',
                   'Kabuto','Kabutops','Kadabra','Kakuna','Kangaskhan','Karrablast','Kecleon','Keldeo'
                  ];
   
      let i=Math.floor(Math.random() * pokemonArray.length);
      let name = pokemonArray[i];
      let pokemonName = lowerCaseName(name);
    
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
          
          document.querySelector(".pokemonBox").innerHTML = `
          
          <div>
            <img
              src="${data.sprites.other["official-artwork"].front_default}"
              alt="Pokemon name"
            />
          </div>
          <div class="pokemonInfos">
      
            <h1>${capitalizeFirstLetter(data.name)}</h3>
            <p>Weight: ${data.weight}</p>
    
            <p>Height: ${data.height}</p>
            <p>ID: ${data.id}</p>
          </div>
          
          `;
    
        })
        .catch((err) => {
          document.querySelector(".pokemonBox").innerHTML = `
          <h4>Pokemon not found 😞</h4>
          `;
          console.log("Pokemon not found", err);
        });
    
      console.log(i);
      
    
}

