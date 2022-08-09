import React from "react";
import Image from "next/image";
import Link from "next/link";
const SingleCharacterAndComicLayout = ({
  name,
  comics,
  description,
  thumbnail,
  urls,
  page,
  title,
  characters,
  images,
  series,
}) => {
  const extractPath = (start, url) => {
    //search for the position of the string characters
    //then return the substring from the provided url starting from the character's position

    const position = url.search(start);
    const path = url.slice(position, url.length);
    return path;
  };
  return (
    <div className=" min-h-screen">
      <div className="mx-auto container px-4 md:px-8 pt-16">
        <div className="flex justify-between items-start md:mt-8">
          <div className="md:flex">
            <div className="shadow-thumbnail-large flex   md:hidden">
              {page === "comic" ? (
                <Image
                  src={`${
                    images[0].path +
                    "/portrait_incredible." +
                    images[0].extension
                  } `}
                  height={206}
                  width={138}
                  alt={page}
                  className=""
                />
              ) : (
                <Image
                  src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
                  height={206}
                  width={138}
                  alt={page}
                  className=""
                />
              )}
            </div>

            <div className="shadow-thumbnail-large md:flex hidden">
              {page === "comic" ? (
                <Image
                  src={`${
                    images[0].path +
                    "/portrait_incredible." +
                    images[0].extension
                  } `}
                  height={324}
                  width={216}
                  alt={page}
                  className=""
                />
              ) : (
                <Image
                  src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
                  height={324}
                  width={216}
                  alt={page}
                  className=""
                />
              )}
            </div>
            <ul className="ml-12 hidden md:inline-block">
              <li className="flex mb-3">
                <h2 className="font-bold text-white text-xs ls:text-sm mr-2 tracking-widest">
                  {page === "character" ? "Name:" : "Title:"}
                </h2>
                <p className="text-white font-normal text-xs ls:text-sm">
                  {page === "character" ? name : title}
                </p>
              </li>
              <li
                className={`flex ${
                  description ? "flex-col" : "flex-row items-center"
                } mb-4 w-11/12 sm:w-4/5 xl:w-full max-w-md`}
              >
                <h2
                  className={`font-bold text-white text-xs ls:text-sm ${
                    description ? "mb-0.5" : "mr-2"
                  }  tracking-widest `}
                >
                  Description:
                </h2>
                <p className="text-white font-normal text-xs ls:text-sm leading-snug text-justify w-full">
                  {description ? description : "No Description Present"}
                </p>
              </li>

              <li className="flex items-center mb-3">
                <h2 className="font-bold text-white text-xs ls:text-sm mr-2 tracking-widest">
                  {page === "character" ? "Info:" : "Series:"}
                </h2>
                {page === "character" ? (
                  <div className="flex  justify-around">
                    {urls.map((url, index) => {
                      return (
                        <a
                          key={index}
                          href={url.url}
                          className="bg-white px-2 py-1 text-xs ls:text-sm font-bold text-red-600 rounded-sm mr-3 capitalize"
                        >
                          {url.type}
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <h1 className="text-white text-xs ls:text-sm">
                    {series.name}
                  </h1>
                )}
              </li>
            </ul>
          </div>

          <Link href={`${page === "comic" ? "/comics" : "/characters"}`}>
            <a className="bg-black rounded-md lg:rounded-sm  h-5 py-4 lg:py-6 px-4 flex justify-center items-center md:mr-4">
              <div className="lg:hidden">
                <Image
                  src="/assets/icons/back.svg"
                  height={12}
                  width={12}
                  alt="back"
                  className=""
                />
              </div>
              <div className="hidden lg:flex mr-2">
                <Image
                  src="/assets/icons/back.svg"
                  height={20}
                  width={20}
                  alt="back"
                  className=""
                />
              </div>
              {page === "comic" ? (
                <p className="ml-2 lg:flex hidden text-sm xl:text-base	text-white font-medium ">
                  Back to comics
                </p>
              ) : (
                <p className="ml-2 lg:flex hidden text-sm xl:text-base	text-white font-medium ">
                  Back to characters
                </p>
              )}
            </a>
          </Link>
        </div>
        <ul className="mt-6 md:hidden">
          <li className="flex  mb-3">
            <h2 className="font-bold text-white text-xs ls:text-sm mr-2 tracking-widest">
              {page === "character" ? "Name:" : "Title:"}
            </h2>
            <p className="text-white font-normal text-xs ls:text-sm">
              {page === "character" ? name : title}
            </p>
          </li>
          <li
            className={`flex ${
              description ? "flex-col" : "flex-row items-center"
            } mb-4 w-11/12 sm:w-4/5 md:1/2 max-w-md`}
          >
            <h2
              className={`font-bold text-white text-xs ls:text-sm ${
                description ? "mb-0.5" : "mr-2"
              }  tracking-widest`}
            >
              Description:
            </h2>
            <p className="text-white font-normal text-xs ls:text-sm leading-snug text-justify">
              {description ? description : "No Description Present"}
            </p>
          </li>

          <li className="flex items-center mb-3">
            {page === "character" ? (
              <h2 className="font-bold text-white text-xs ls:text-sm mr-2 tracking-widest">
                Info:
              </h2>
            ) : (
              <h2 className="font-bold text-white text-xs ls:text-sm mr-2 tracking-widest">
                Series:
              </h2>
            )}

            {page === "character" ? (
              <div className="flex  justify-around">
                {urls.map((url, index) => {
                  return (
                    <a
                      key={index}
                      href={url.url}
                      className="bg-white px-2 py-1 text-xs ls:text-sm font-bold text-red-600 rounded-sm mr-3 capitalize"
                    >
                      {url.type}
                    </a>
                  );
                })}
              </div>
            ) : (
              <h1 className=" text-white text-xs ls:text-sm">{series.name}</h1>
            )}
          </li>
        </ul>
        {page === "character" ? (
          <div className="mt-8">
            {comics.items.length > 0 && (
              <h1 className="text-white font-medium text-sm w-4/5 max-w-xl">
                {name} appeared in the following comics:
              </h1>
            )}
            {comics.items.length === 0 && <h1 className="text-white font-medium text-sm w-4/5 max-w-xl">
                {name} did not appeare in any comics
              </h1>
            }
            {page === "character" && (
              <div className="pb-4 mt-4 flex flex-wrap  max-w-5xl">
                {comics.items.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/${extractPath("comics", item.resourceURI)}`}
                    >
                      <div className="cursor-pointer transition transfrom hover:-translate-y-1 mb-4 hover:bg-white hover:text-red-500 bg-collections px-4 rounded-full flex items-center py-2 shadow-collections md:w-auto mr-4 ">
                        <a className="text-xs font-medium text-white   ">
                          {item.name}
                        </a>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-8">
            {characters.items.length > 0 ? (
              <h1 className="text-white font-medium text-sm  max-w-xl">
                Characters That Appearead in {title}:
              </h1>
            ) : (
              <h1 className="text-white font-medium text-sm  max-w-xl">
                No Characters Included...
              </h1>
            )}

            <div className="pb-4 mt-4 flex flex-wrap  max-w-5xl">
              {characters.items.map((item, index) => {
                return (
                  <Link
                    href={`/${extractPath("characters", item.resourceURI)}`}
                    key={index}
                  >
                    <div className="cursor-pointer transition transfrom hover:-translate-y-1 mb-4 hover:bg-white hover:text-red-500 bg-collections px-4 rounded-full flex items-center py-2 shadow-collections  md:w-auto mr-4 ">
                      <a className="text-xs font-medium text-white   ">
                        {item.name}
                      </a>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCharacterAndComicLayout;
