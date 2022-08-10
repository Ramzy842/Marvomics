import axios from "axios";
import Head from "next/head";
import React, { useEffect } from "react";
import CharactersAndComicsLayout from "../../components/layouts/CharactersAndComicsLayout";

const CharactersPage = ({ characters, setMenuOpen }) => {
  useEffect(() => {
    setMenuOpen(false)
  }, [setMenuOpen])
  return (
    <>
      <Head>
        <title>Marvomics | Characters</title>
      </Head>
      <CharactersAndComicsLayout
        characters
        data={characters.data}
        type="characters"
      />
    </>
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
