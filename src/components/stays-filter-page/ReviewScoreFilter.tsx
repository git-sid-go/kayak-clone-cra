import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function ReviewScoreFilter() {
  const scoreArray = ["0+", "6+", "7+", "8+", "9+"];
  const [selectedScore, setSelectedScore] = useState("");

  const handleClick = (score: string) => {
    setSelectedScore(score);
  };

  const getRating = (score: string) => {
    if (score === "0+") {
      return selectedScore === "0+"
        ? "bg-black text-white font-xl font-bold"
        : "bg-opacity-80";
    }

    if (selectedScore !== "0+") {
      const selectedScoreIndex = scoreArray.indexOf(selectedScore);
      const currentScoreIndex = scoreArray.indexOf(score);
      return currentScoreIndex >= selectedScoreIndex
        ? "bg-black text-white font-xl font-bold"
        : "bg-opacity-80";
    }

    return;
  };

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Review Score</AccordionTrigger>
          <AccordionContent>
            <div className="flex">
              {scoreArray.map((score, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center border border-black rounded-sm cursor-pointer w-8 h-8 mx-1 ${getRating(
                    score
                  )}`}
                  onClick={() => handleClick(score)}
                >
                  {score}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
