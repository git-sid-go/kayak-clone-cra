import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { HotelScoreItem } from "./HotelScoreItem";

interface HotelScoreFilterProps {
  onValueChange: (value: string) => void;
}

export function HotelScoreFilter({ onValueChange }: HotelScoreFilterProps) {
  const HotelScoreArray = ["0+", "1", "2", "3", "4"];

  const [selectedScore, setSelectedScore] = useState("0+");

  const handleClick = (score: string) => {
    setSelectedScore(score);
    onValueChange(score); // Call the callback function
  };

  const resetRating = () => {
    setSelectedScore("0+");
    onValueChange("0+"); // Call the callback function
  };

  return (
    <div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold no-underline -py-2">
            Hotel Class
          </AccordionTrigger>
          <AccordionContent>
            {selectedScore !== "0+" && (
              <button onClick={resetRating} className="text-xxs text-blue-600">
                x Reset
              </button>
            )}
            <div className="flex">
              {HotelScoreArray.map((score, index) => (
                <HotelScoreItem
                  key={index}
                  score={score}
                  handleClick={handleClick}
                  selectedScore={selectedScore}
                  HotelScoreArray={HotelScoreArray}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
