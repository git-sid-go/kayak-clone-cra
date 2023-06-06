import { HotelScoreFilter } from "../stays-filter-page/HotelScoreFilter";
import { LocationFilter } from "../stays-filter-page/LocationFilter";
import { ReviewScoreFilter } from "../stays-filter-page/ReviewScoreFilter";
import { StayListItem } from "./StayListItem";

export function StaysContent() {
  return (
    <div className="pt-24 pl-24 bg-slate-200 min-h-screen">
      <div className="flex">
        {/* Filters section */}
        <div className="w-56 mr-4 my-6">
          <HotelScoreFilter />
          <ReviewScoreFilter />
          <LocationFilter />
        </div>
        {/* Stays list section */}
        <div>
          {Array.from(Array(10).keys()).map((_, index) => (
            <StayListItem key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
