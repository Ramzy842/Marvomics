import React from "react";
import axios from "axios";
import SingleCharacterAndComicLayout from "../../components/layouts/SingleCharacterAndComicLayout";
import Head from "next/head";

const Comic = ({ comic }) => {
  const { id, title, characters, images, series } = comic.results[0];

  return (
    <>
      <Head>
        <title>Marvomics | {title}</title>
      </Head>
      <SingleCharacterAndComicLayout
        id={id}
        title={title}
        characters={characters}
        images={images}
        page="comic"
        series={series}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const comicsUrl = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.Hash}`;
  const req = await axios.get(comicsUrl);
  const comics = await req.data.data;
  const paths = comics.results.slice(0, 10).map((element) => {
    const { id } = element;
    return {
      params: {
        comicId: `${id}`,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { comicId } = params;

  const comicUrl = `https://gateway.marvel.com/v1/public/comics/${comicId}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.Hash}`;
  try {
    const req = await axios.get(comicUrl);
    const comic = await req.data.data;
    if (!comic) {
      return { notFound: true };
    }
    return {
      props: {
        comic,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Comic;
