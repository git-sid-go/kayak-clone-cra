import { useState, useEffect } from "react";
import { HotelCheckBox } from "../stays-filter-page/HotelCheckBox";
import { HotelScoreFilter } from "../stays-filter-page/HotelScoreFilter";
import { LocationFilter } from "../stays-filter-page/LocationFilter";
import { ReviewScoreFilter } from "../stays-filter-page/ReviewScoreFilter";
import { StayListItem } from "./StayListItem";

export function StaysContent() {
  const [hotelFilterValue, setHotelFilterValue] = useState("0+");
  const [reviewFilterValue, setReviewFilterValue] = useState("0+");

  const handleFilterChange = (type: string, value: any) => {
    if (type === "hotel") {
      setHotelFilterValue(value);
    } else if (type === "review") {
      setReviewFilterValue(value);
    }
  };

  useEffect(() => {
    console.log(
      "Hotel Class selected:",
      hotelFilterValue,
      "| Review Score Selected:",
      reviewFilterValue
    );
  }, [hotelFilterValue, reviewFilterValue]);

  return (
    <div className="pt-24 pl-24 bg-slate-200 min-h-screen">
      <div className="flex">
        {/* Filters section */}
        <div className="w-56 mr-4 my-6">
          <HotelScoreFilter
            onValueChange={(value) => handleFilterChange("hotel", value)}
          />
          <ReviewScoreFilter
            onValueChange={(value) => handleFilterChange("review", value)}
          />
          <LocationFilter />
          <HotelCheckBox />
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
