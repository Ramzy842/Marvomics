import Image from "next/image";
import React, { useEffect, useState } from "react";
import InputField from "../custom/InputField";
import Footer from "../footer/Footer";
import Link from "next/link";
import axios from "axios";

const CharactersAndComicsLayout = ({ data, page, type, API_KEY, Hash }) => {
  const [list, setList] = useState(data);
  
  const [searchTerm, setSearchTerm] = useState("");
  const characterSearchByTerm = `https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith=${searchTerm}&apikey=${API_KEY}&hash=${Hash}`;
  const comicsSearchByTerm = `https://gateway.marvel.com/v1/public/comics?ts=1&titleStartsWith=${searchTerm}&apikey=${API_KEY}&hash=${Hash}`;

  useEffect(() => {
    const fetchNew = async () => {
      if (searchTerm.length > 0) {
        const req = await axios.get(
          page === "comics" ? comicsSearchByTerm : characterSearchByTerm
        );
        const result = req.data.data;
        setList(result);
      }
    };
    fetchNew();
  }, [characterSearchByTerm, comicsSearchByTerm, page, searchTerm]);
  return (
    <div>
      <div className=" pt-24  mx-auto container ">
        <InputField
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder={
            page === "comics" ? "Enter comic’s name" : "Enter character’s name"
          }
        />
        <div className="max-w-3xl text-white flex text-xs lg:text-base	font-medium w-full md:w-1/2 justify-between sm:justify-start  mt-4 px-2 md:px-8 mx-auto md:mx-0 md:ml-8 md:pl-0">
          <p className=" sm:mr-4">
            {list.total} {type} found
          </p>{" "}
          |{" "}
          <p className="  sm:ml-4">
            {list.count} {type} displayed
          </p>{" "}
        </div>
      </div>

      <div
        className=" overflow-x-scroll mobile-slider mt-4 flex  mx-2 sm:hidden relative "
        id="slider"
      >
        {list.results?.map((element) => {
          const { id, name, title, thumbnail } = element;
          return (
            <div
              key={id}
              className="flex flex-col items-center justify-between flex-[0_0_65%] ls:flex-[0_0_45%] z-20 "
            >
              <div className="flex flex-col items-center ">
                <div className="rounded-md shadow-poster-mobile flex">
                  <Image
                    src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
                    width={150}
                    height={225}
                    alt="comic"
                    className="rounded-md "
                  />
                </div>

                <h1 className="text-sm font-bold text-white text-center my-4 w-3/5">
                  {name || title}
                </h1>
              </div>

              <Link href={`/${type}/${id}`}>
                <div className="group cursor-pointer text-sm font-bold border border-2 py-2 rounded-md px-6 hover:scale-95 hover:bg-white transition">
                  <a
                    className={`${"text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-main-bg "}`}
                  >
                    View More
                  </a>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="p-4">
        <div className="mx-auto container">
          <div className="  scrollbar hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-8 mt-4 gap-y-8 ">
            {list.results?.map((element) => {
              const { id, name, title, thumbnail } = element;
              return (
                <div
                  key={id}
                  className={`flex flex-col justify-between items-center`}
                >
                  <div className="flex flex-col items-center ">
                    <div className="rounded-md shadow-poster-mobile flex">
                      <Image
                        src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
                        width={150}
                        height={225}
                        alt="comic"
                        className=" rounded-md transition"
                      />
                    </div>

                    <h1 className="text-base font-bold text-white text-center my-4 w-3/5">
                      {name || title}
                    </h1>
                  </div>

                  <Link href={`/${type}/${id}`}>
                    <div className="group cursor-pointer text-sm font-bold border border-2 py-2 rounded-md px-6 hover:scale-95 hover:bg-white transition">
                      <a
                        className={`${"text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-main-bg "}`}
                      >
                        View More
                      </a>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer cn="absolute bottom-0 md:static" />
    </div>
  );
};

export default CharactersAndComicsLayout;
