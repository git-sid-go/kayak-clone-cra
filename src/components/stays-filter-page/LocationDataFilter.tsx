import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MOCKDATA_LOCATION } from "./filter-mockdata/MOCKDATA_LOCATION";
import { LocationPlaceFilter } from "./LocationPlaceFilter";

export function LocationDataFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [LocationValue, setLocationValue] = useState("Any Distance");

  const handleToggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleDistanceSelection = (distance: React.SetStateAction<string>) => {
    setLocationValue(distance);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col relative">
      <DropdownMenu onOpenChange={handleToggleDropdown} open={isOpen}>
        <DropdownMenuTrigger>
          <div className="absolute right-0 top-0 mr-3 mt-2 flex items-center">
            <ChevronDown size={22} />
          </div>
          <Input
            type="name"
            placeholder={LocationValue}
            className="bg-white hover:border-black cursor-pointer"
            itemID="1"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {MOCKDATA_LOCATION.map((location, i) => (
            <DropdownMenuItem
              key={i}
              onClick={() => handleDistanceSelection(location.distance)}
            >
              <div className="h-max w-48 ">{location.distance}</div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
