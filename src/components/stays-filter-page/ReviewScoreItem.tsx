export function ReviewScoreItem({
  score,
  handleClick,
  selectedScore,
  scoreArray,
}: {
  score: string;
  handleClick: (score: string) => void;
  selectedScore: string;
  scoreArray: string[];
}) {
  const getRatingStyles = (score: string) => {
    if (selectedScore === "0+" && score === "0+") {
      return "bg-black text-white font-xl font-bold";
    }

    if (selectedScore === "0+" && score !== "0+") {
      return "bg-white";
    }

    const selectedScoreIndex = scoreArray.indexOf(selectedScore);
    const currentScoreIndex = scoreArray.indexOf(score);
    return currentScoreIndex >= selectedScoreIndex
      ? "bg-black text-white font-xl font-bold"
      : "bg-white";
  };

  return (
    <div
      className={`flex items-center justify-center border border-gray-400  text-black rounded-sm cursor-pointer w-8 h-8 mx-1 font-bold hover:border-black ${getRatingStyles(
        score
      )}`}
      onClick={() => handleClick(score)}
    >
      {score}
    </div>
  );
}
