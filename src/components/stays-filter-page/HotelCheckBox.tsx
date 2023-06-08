import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";
import { HotelDataCheckBox } from "./HotelDataCheckBox";

export function HotelCheckBox() {
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold no-underline py-2">
            Freebies
          </AccordionTrigger>
          <AccordionContent>
            <HotelDataCheckBox />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
