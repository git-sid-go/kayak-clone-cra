import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { MOCKDATA_HOTELCHECKBOX } from "./filter-mockdata/MOCKDATA_HOTELCHECKBOX";

export function HotelDataCheckBox() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const displayCount = showMore ? MOCKDATA_HOTELCHECKBOX.length : 6;

  return (
    <div>
      {MOCKDATA_HOTELCHECKBOX.slice(0, displayCount).map((checkbox, index) => (
        <div className="flex items-center py-1" key={index}>
          <Checkbox
            id={`checkbox-${index}`}
            className={`bg-white ${
              checkbox.isDisabled ? "border-gray-300" : "border"
            }`}
            disabled={checkbox.isDisabled || false}
          />
          <label htmlFor={`checkbox-${index}`} className="text-sm px-2">
            {checkbox.title}
          </label>
          <div className="flex flex-grow justify-end">
            {checkbox.freebieshotelno}
          </div>
        </div>
      ))}
      {MOCKDATA_HOTELCHECKBOX.length > 6 && (
        <button
          onClick={handleClick}
          className="text-blue-500 mt-2  font-bold hover:underline"
        >
          {showMore ? `Less` : `+${MOCKDATA_HOTELCHECKBOX.length} more`}
        </button>
      )}
    </div>
  );
}
