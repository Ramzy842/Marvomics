import NotFound from "../components/layouts/404";

export default function Custom404() {
  return (
    <NotFound>
      <h1 className="text-white mx-auto font-bold w-4/5 text-center mb-20 lg:mb-0 lg:mt-20 text-xl md:text-2xl">
        The Page you&apos;re trying to access does not exist
      </h1>
    </NotFound>
  );
}
