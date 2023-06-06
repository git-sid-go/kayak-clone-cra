import { Search } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LocationPlaceFilterMap } from "./LocationPlaceFilterMap";
import { Input } from "../ui/input";

export function LocationPlaceFilter({}: {}) {
  return (
    <div className="flex flex-col relative">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Search className="absolute left-0 top-0 ml-2 text-black pl-1 mt-4" />
          <Input
            type="name"
            className="bg-white hover:border-black cursor-pointer mt-2 pl-12"
            placeholder="The Plaza Hotel "
            itemID="2"
          ></Input>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <LocationPlaceFilterMap />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

{
  /* <div className="absolute left-0 bottom-0 mb-2.5 ml-3 flex items-center">
        <Search size={18} />
      </div>
      <Input
        type="name"
        placeholder="The Plaza Hotel"
        className="bg-white mt-2 pl-12"
        itemID="2"
      /> */
}
