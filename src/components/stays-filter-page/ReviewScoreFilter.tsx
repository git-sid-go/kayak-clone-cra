import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ReviewScoreItem } from "./ReviewScoreItem";
interface ReviewScoreFilterProps {
  onValueChange: (value: string) => void;
}
export function ReviewScoreFilter({ onValueChange }: ReviewScoreFilterProps) {
  const scoreArray = ["0+", "6+", "7+", "8+", "9+"];
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
            Review Score
          </AccordionTrigger>
          <AccordionContent>
            {selectedScore !== "0+" && (
              <button onClick={resetRating} className="text-xxs text-blue-600">
                x Reset
              </button>
            )}
            <div className="flex py-4">
              {scoreArray.map((score, index) => (
                <ReviewScoreItem
                  key={index}
                  score={score}
                  handleClick={handleClick}
                  selectedScore={selectedScore}
                  scoreArray={scoreArray}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
