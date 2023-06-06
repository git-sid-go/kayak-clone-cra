import { Search } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LocationPlaceFilterMap } from "./LocationPlaceFilterMap";
import { Input } from "../ui/input";

export function LocationPlaceFilter() {
  return (
    <div className="flex flex-col relative  mt-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Search className="absolute left-0 top-0 ml-2 text-black pl-1 mt-2.5" />
          <Input
            type="name"
            className="bg-white hover:border-black cursor-pointer pl-12"
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
