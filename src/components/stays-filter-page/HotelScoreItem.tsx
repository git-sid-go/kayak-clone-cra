import { Star } from "lucide-react";
import { useState } from "react";

export function HotelScoreItem({
  score,
  handleClick,
  selectedScore,
  HotelScoreArray,
}: {
  score: string;
  handleClick: (score: string) => void;
  selectedScore: string;
  HotelScoreArray: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = () => {
    const scoreNumber = Number(score[0]);
    const selectedScoreNumber = Number(selectedScore[0]);

    if (selectedScoreNumber === 0) {
      return scoreNumber === 0;
    }

    return scoreNumber >= selectedScoreNumber;
  };

  const getRatingStyles = () => {
    return isSelected() ? "font-xl font-bold " : "";
  };

  const getFillColor = () => {
    return isSelected() ? "#363F37" : "white";
  };

  const getTextColor = () => {
    return isSelected() ? "text-white font-bold" : "text-black font-extralight";
  };

  const getStrokeColor = () => {
    return isSelected() ? "#363F37" : isHovered ? "#363F37" : "#363F3750";
  };
  return (
    <div className="relative cursor-pointer">
      <Star
        className={`flex items-center justify-center rounded-sm  mx-1 font-bold  ${getRatingStyles()}`}
        fill={getFillColor()}
        color={getStrokeColor()}
        strokeWidth={1}
        size={36}
      />
      <span
        className={`absolute inset-0 flex items-center justify-center text-center  text-xxs ${getTextColor()}`}
        onClick={() => handleClick(score)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {score}
      </span>
    </div>
  );
}
