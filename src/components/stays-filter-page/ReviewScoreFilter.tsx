import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ReviewScoreItem } from "./ReviewScoreItem";

export function ReviewScoreFilter() {
  const scoreArray = ["0+", "6+", "7+", "8+", "9+"];
  const [selectedScore, setSelectedScore] = useState("0+");

  const handleClick = (score: string) => {
    setSelectedScore(score);
  };

  const resetRating = () => {
    setSelectedScore("0+");
  };

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold no-underline -py-2">
            Review Score
          </AccordionTrigger>
          <AccordionContent className="">
            {selectedScore !== "0+" && (
              <button onClick={resetRating} className="text-xxs text-blue-600">
                x Reset
              </button>
            )}
            <div className="flex">
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
