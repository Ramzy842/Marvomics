import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Buttons from "../components/navigation/Buttons";

export default function Home({setMenuOpen}) {
  useEffect(() => {
    setMenuOpen(false)
  }, [setMenuOpen])
  return (
    <>
      <Head>
        <title>
          Marvomics | Your Favorite Marvel Characters And Comics All In One
        </title>
      </Head>
      <div>
        <div className="bg-black-gradient-overlay-1">
          <div className="container mx-auto flex flex-col justify-center  min-h-screen	items-center relative ">
            <div className="flex flex-col">
              <h1 className="mx-2 text-2xl font-bold text-white text-center mb-8 md:text-4xl sm:mx-4  xl:text-6xl capitalize leading-normal md:leading-tight lg:leading-snug xl:leading-snug md:tracking-wide  max-w-xl lg:max-w-3xl	">
                Your Favorite Marvel Characters and Comics all in one
              </h1>
              <Buttons />
            </div>
            <Footer cn="absolute bottom-0" />
          </div>
        </div>
      </div>
    </>
  );
}
