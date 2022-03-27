const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;    
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./601px-Pokebola-pokeball-png-0.png");
        }
        else{
            return res.json();
        }        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokemonName = data.name;
        let pokeType = data.types.map (tipo => tipo.type.name);
        let pokeHp = data.stats.map (life => life.base_stat)[0];
        let pokeAttack = data.stats.map (attack => attack.base_stat)[1];
        let pokeDefense = data.stats.map (defense => defense.base_stat)[2];
        let pokeSpecialAttack = data.stats.map (specialAttack => specialAttack.base_stat)[3];
        let pokeSpecialDefense = data.stats.map (specialDefense => specialDefense.base_stat)[4];
        let pokeAbilities = data.moves.map (abilities => abilities.move.name);
        console.log(pokemonName);
        console.log(pokeImg);
        console.log(pokeAbilities);
        pokeImage(pokeImg, pokemonName, pokeType, pokeHp, pokeAttack, pokeDefense, pokeSpecialAttack, pokeSpecialDefense, pokeAbilities);
    });
}

//fetchPokemon();

const pokeImage = (url, name, type, hp, attack, defense, specialAttack, specialDefense, abilities) => {
    const pokeImg = document.getElementById("pokeImg");
    const pokemonName = document.getElementById("pokemonName");
    const pokemonType = document.getElementById("pokemonType");
    const pokemonHp = document.getElementById("pokemonHp");
    const pokemonAttack = document.getElementById("pokemonAttack");
    const pokemonDefense = document.getElementById("pokemonDefense");
    const pokemonSpecialAttack = document.getElementById("pokemonSpecialAttack");
    const pokemonSpecialDefense = document.getElementById("pokemonSpecialDefense");
    const pokemonAbilities = document.getElementById("pokemonAbilities");
    pokemonName.value = name.toUpperCase();
    pokeImg.src = url;
    pokemonType.value = type;
    pokemonHp.value = hp;
    pokemonAttack.value = attack;
    pokemonDefense.value =defense;
    pokemonSpecialAttack.value = specialAttack;
    pokemonSpecialDefense.value = specialDefense;
    pokemonAbilities.value = abilities;
}

//pokeImage();

const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola "+pokeInput);
}

const inp = document.getElementById("pokeName");
inp.addEventListener("keydown", function(e){
    if(e.code == "Enter"){
        fetchPokemon();
    }
});