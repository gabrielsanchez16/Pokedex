import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log("err"));
  }, []);

  const colorchange = {
    water:
      "linear-gradient(349.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 104.85%)",
    fire: "linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)",
    grass:
      "linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)",
    bug: "linear-gradient(477.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 109.53%)",
    flying:
      "linear-gradient(178.92deg, #f3f9f8 0.92%, #5fcce3 47.96%, #92a6e8 99.08%)",
    dark: "linear-gradient(107.03deg, #030706 -20.97%, #0D1211 47.49%, #5A5E5D 115.64%)",
    normal:
      "linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)",
    poison:
      "linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)",
    ground:
      "linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)",
    electric:
      "linear-gradient(259.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 88.4%)",
    fairy:
      "linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)",
    fighting:
      "linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)",
    psychic:
      "linear-gradient(279.75deg, #E62D2D -19.96%, #D13E3E 43.67%, #F07F7F 68.4%)",
    rock: "linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)",
    steel:
      "linear-gradient(179.75deg, #5E736C -19.96%, #728881 83.67%, #A8A8A8 138.4%)",
    ice: "linear-gradient(287.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)",
    ghosh:
      "linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)",
    dragon:
      "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)",
  };

  const colorBorder = {
    water: "#1F5FBF",
    fire: "#E35B26",
    grass: "#57BAB7",
    bug: "#58B33C",
    flying: "#68c6ed",
    dark: "#0D1210",
    normal: "#7B555D",
    poison: "#7442A4",
    ground: "#855918",
    electric: "#212E99",
    fairy: "#B03D57",
    fighting: "#A3452D",
    psychic: "#e44d46",
    rock: "#848487",
    steel: "#6B8079",
    ice: "#69C5EC",
    ghosh: "#454AA1",
    dragon: "#4F98A2",
  };

  return (
    <article
      className="poke-card"
      style={{
        background: colorchange[pokemon?.types[0].type.name],
        borderColor: colorBorder[pokemon?.types[0].type.name],
      }}
      onClick={() => navigate(`/PokedexId/${pokemon.id}`)}
    >
      <img
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt="Pokemon-image"
      />
      <div className="container-info">
        <h2>{pokemon?.name}</h2>
        <h3>
          {pokemon?.types[0].type.name}/{pokemon?.types[1]?.type.name}
        </h3>
        <p>Type</p>
        <hr />
        <div className="container-ul">
          <ul>
            <li>
              <b>{pokemon?.stats[0].stat.name}:</b>{" "}
              <span style={{ color: colorBorder[pokemon?.types[0].type.name] }}>
                {pokemon?.stats[0].base_stat}
              </span>
            </li>
            <li>
              <b>{pokemon?.stats[1].stat.name}:</b>{" "}
              <span style={{ color: colorBorder[pokemon?.types[0].type.name] }}>
                {pokemon?.stats[1].base_stat}
              </span>
            </li>
            <li>
              <b>{pokemon?.stats[2].stat.name}:</b>{" "}
              <span style={{ color: colorBorder[pokemon?.types[0].type.name] }}>
                {pokemon?.stats[2].base_stat}
              </span>
            </li>
          </ul>

          <ul>
            <li>
              <b>{pokemon?.stats[3].stat.name}:</b>{" "}
              <span style={{ color: colorBorder[pokemon?.types[0].type.name] }}>
                {pokemon?.stats[3].base_stat}
              </span>
            </li>
            <li>
              <b>{pokemon?.stats[4].stat.name}:</b>{" "}
              <span style={{ color: colorBorder[pokemon?.types[0].type.name] }}>
                {pokemon?.stats[4].base_stat}
              </span>
            </li>
            <li>
              <b>{pokemon?.stats[5].stat.name}:</b>{" "}
              <span style={{ color: colorBorder[pokemon?.types[0].type.name] }}>
                {pokemon?.stats[5].base_stat}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default PokemonCard;
