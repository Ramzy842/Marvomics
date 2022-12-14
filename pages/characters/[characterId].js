import React from "react";
import axios from "axios";
import SingleCharacterAndComicLayout from "../../components/layouts/SingleCharacterAndComicLayout";
import Head from "next/head";
const Character = ({ character }) => {
  const { name, comics, description, thumbnail, urls } = character.results[0];
  return (
    <>
      <Head>
        <title>Marvomics | {name}</title>
      </Head>
      <SingleCharacterAndComicLayout
        name={name}
        comics={comics}
        description={description}
        thumbnail={thumbnail}
        urls={urls}
        page="character"
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const charactersUrl = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.Hash}`;
  const req = await axios.get(charactersUrl);
  const characters = await req.data.data;
  const paths = characters.results.slice(0, 10).map((element) => {
    const { id } = element;
    return {
      params: {
        characterId: `${id}`,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { characterId } = params;
  const characterUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.Hash}`;
  try {
    const req = await axios.get(characterUrl);
    const character = await req.data.data;
    if (!character) {
      return { notFound: true };
    }
    return {
      props: {
        character,
      },
    };
  } catch {
    return { notFound: true };
  }
};

export default Character;
