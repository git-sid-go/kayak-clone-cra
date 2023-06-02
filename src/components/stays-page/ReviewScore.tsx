interface Colors {
  [key: string]: string;
}

export const ReviewScore = ({ score }: { score: number }) => {
  let gradientColor = "";

  const progress = score * 10;

  if (progress >= 0 && progress <= 20) {
    gradientColor = "gradient20";
  } else if (progress > 20 && progress <= 40) {
    gradientColor = "gradient40";
  } else if (progress > 40 && progress <= 60) {
    gradientColor = "gradient60";
  } else if (progress > 60 && progress <= 80) {
    gradientColor = "gradient80";
  } else if (progress > 80 && progress <= 100) {
    gradientColor = "gradient80";
  }

  const colors: Colors = {
    apppink: "#FAF7F8",
    navpink: "#F9F5F2",
    focusedred: "#DB3C3B",
    gradient80: "#98B6DD",
    gradient60: "#ECB67D",
    gradient40: "#9BC8D2",
    gradient20: "#BEE4B5",
    gradient0: "#22201F",
  };

  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 600,
        background: `radial-gradient(closest-side, white 75%, transparent 80% 100%),
          conic-gradient(from 0deg at 50% 50%, ${
            colors[gradientColor as keyof Colors]
          } ${progress}%, ${colors.apppink} 0)`,
      }}
    >
      <div className="font-bold">{score}</div>
    </div>
  );
};
