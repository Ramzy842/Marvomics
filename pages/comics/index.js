import React from "react";
import axios from "axios";
import CharactersAndComicsLayout from "../../components/layouts/CharactersAndComicsLayout";

const comicsPage = ({ comics }) => {
  return (
    <CharactersAndComicsLayout
      page="comics"
      data={comics.data}
      comics
      type="comics"
    />
  );
};

export const getStaticProps = async () => {
  const comicsUrl = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.Hash}`;
  const req = await axios.get(comicsUrl);
  const comics = await req.data;
  return {
    props: {
      comics,
    },
  };
};

export default comicsPage;
