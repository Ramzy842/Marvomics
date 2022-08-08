import axios from "axios";
import React, { useEffect } from "react";
import CharactersAndComicsLayout from "../../components/layouts/CharactersAndComicsLayout";

const CharactersPage = ({ characters }) => {
  useEffect(() => {
    console.log(characters.data);
  }, [characters.data]);
  return (
    <CharactersAndComicsLayout
      characters
      data={characters.data}
      type="characters"
    />
  );
};

export const getStaticProps = async () => {
  const charactersUrl = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.Hash}`;
  const req = await axios.get(charactersUrl);
  const characters = await req.data;

  return {
    props: {
      characters,
    },
  };
};

export default CharactersPage;
