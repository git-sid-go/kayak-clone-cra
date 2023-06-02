import { Heart } from "lucide-react";

export function StayPreview() {
  return (
    <div className="relative">
      <img
        className="w-52 h-52 rounded-xl object-cover"
        src="https://source.unsplash.com/_dS27XGgRyQ"
        alt="Radga Regent"
      />
      <div className="absolute top-4 right-4 px-2 py-1 w-8 h-6 cursor-pointer bg-gray-900 bg-opacity-50 rounded-md hover:bg-opacity-100">
        <Heart color="white" size={16} />
      </div>
    </div>
  );
}
