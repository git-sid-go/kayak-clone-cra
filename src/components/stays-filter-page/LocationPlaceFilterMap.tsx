import { BedDouble, LucideIcon } from "lucide-react";
import { MOCKDATA_PLACE } from "./filter-mockdata/MOCKDATA_PLACE";

export function LocationPlaceFilterMap() {
  const visibleItems = MOCKDATA_PLACE.slice(0, 5);

  return (
    <div className="p-3 overflow-auto h-40">
      {visibleItems.map((location) => (
        <StaysResultItem place={location} key={location.title} />
      ))}
      {MOCKDATA_PLACE.slice(5).map((location) => (
        <StaysResultItem place={location} key={location.title} />
      ))}
    </div>
  );
}

export function StaysResultItem({
  place,
}: {
  place: { title: string; image: LucideIcon };
}) {
  return (
    <div className="flex cursor-pointer py-2 items-center my-1 hover:bg-slate-200 ">
      <div className="relative overflow-hidden">
        <BedDouble size={12} />
      </div>
      <div className="ml-3 w-80">
        <div className="text-xs ">{place.title}</div>
      </div>
    </div>
  );
}
