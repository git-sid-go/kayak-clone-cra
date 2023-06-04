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
    const scoreNumber = Number(score[0]);
    const selectedScoreNumber = Number(selectedScore[0]);

    if (selectedScoreNumber === 0) {
      return scoreNumber > 0
        ? "bg-white"
        : "bg-black text-white font-xl font-bold";
    }

    return scoreNumber >= selectedScoreNumber
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
