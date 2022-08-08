import React from "react";

const InputField = ({ placeholder, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="bg-black placeholder:font-thin  placeholder:text-sm ls:placeholder:text-md w-60 sm:w-72 md:w-80 px-4 rounded-md outline-none py-2 text-white shadow-md mb-4 max-w-5xl"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
