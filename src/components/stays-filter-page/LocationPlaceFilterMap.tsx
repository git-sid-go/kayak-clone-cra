import { BedDouble, LucideIcon } from "lucide-react";
import { MOCKDATA_PLACE } from "./filter-mockdata/MOCKDATA_PLACE";

export function LocationPlaceFilterMap() {
  return (
    <div className="p-3">
      {MOCKDATA_PLACE.map((location) => (
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
    <div className="flex cursor-pointer py-2 hover:bg-slate-100 items-center">
      <div className="relative overflow-hidden">
        <BedDouble size={12} />
      </div>
      <div className="ml-3">
        <div className="text-xs">{place.title}</div>
      </div>
    </div>
  );
}
