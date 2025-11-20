import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="flex justify-center">
      <form className="w-full max-w-sm">
        <div className="text-center mb-4 relative">
          <input
            type="text"
            placeholder="Axtarış..."
            className="form-input border bg-gray-100 border-gray-300 px-3 py-2 outline-none rounded-lg w-full"
          />
          <BsSearch className="absolute right-2 top-1/3 text-gray-500"/>
        </div>
      </form>
    </div>
  );
};
export default Search;
