import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { LocationDataFilter } from "./LocationDataFilter";
import { LocationPlaceFilter } from "./LocationPlaceFilter";

export function LocationFilter() {
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold no-underline -py-2">
            Location
          </AccordionTrigger>
          <AccordionContent>
            <LocationDataFilter />
            <LocationPlaceFilter />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
