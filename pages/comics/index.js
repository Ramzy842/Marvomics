import React, { useEffect } from "react";
import axios from "axios";
import CharactersAndComicsLayout from "../../components/layouts/CharactersAndComicsLayout";
import Head from "next/head";

const ComicsPage = ({ comics, setMenuOpen, API_KEY, Hash }) => {
  
  useEffect(() => {
    setMenuOpen(false)
  }, [setMenuOpen])
  return (
    <>
      <Head>
        <title>Marvomics | Comics</title>
      </Head>
      <CharactersAndComicsLayout
        page="comics"
        data={comics.data}
        comics
        type="comics"
        API_KEY={API_KEY}
        Hash={Hash}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const comicsUrl = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.Hash}`;
  const req = await axios.get(comicsUrl);
  const comics = await req.data;
  return {
    props: {
      comics,
      API_KEY: process.env.API_KEY,
      Hash: process.env.Hash
    },
  };
};

export default ComicsPage;
