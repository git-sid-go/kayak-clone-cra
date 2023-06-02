import { Star } from "lucide-react";

export function StarRating({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex">
      {Array.from(Array(rating).keys()).map((_, index) => (
        <Star
          key={index}
          size={12}
          className="text-black opacity-60 fill-black mx-1"
        />
      ))}
    </div>
  );
}
