import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";

const SearchInput = () => {
  const user = useUser();
  return (
    <div className={"w-full shadow rounded-md"}>
      <div className="py-2 w-full">
        <div className="px-5 w-full mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full border-2 border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-secondary"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoSearchOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
