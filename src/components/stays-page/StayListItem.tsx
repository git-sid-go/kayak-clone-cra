import { ReviewScore } from "./ReviewScore";
import { StarRating } from "./StarRating";
import { StayPreview } from "./StayPreview";
import { StayProviderItem } from "./StayProviderItem";

export function StayListItem() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-transparent hover:border-gray-400 transition-all mb-4">
      <div className="flex mb-4 justify-between">
        <div>
          {/* Title and rating */}
          <div className="flex items-end">
            <h2 className="text-stay-title font-bold leading-none">
              Radha Regent - Chennai
            </h2>
            <div className="relative bottom-0.5 ml-2">
              <StarRating rating={3} />
            </div>
          </div>

          {/* Show on map */}
          <div className="mt-1 text-xs text-blue-500">Show on map</div>
        </div>

        <div className="flex">
          {/* Review & Score */}
          <div className="text-right">
            <div className="font-bold">Good</div>
            <div className="font-light text-xxs">376 reviews</div>
          </div>
          <div className="ml-2">
            <ReviewScore score={9.2} />
          </div>
        </div>
      </div>

      <div className="flex">
        <StayPreview />
        <div className="ml-4">
          <StayProviderItem
            logoImageUrl="https://content.r9cdn.net/rimg/provider-logos/hotels/h/HOTELSDOTCOM.png?crop=false&width=88&height=31&fallback=default1.png&_v=55208baa39a6df9131c66642c97394c3"
            featuresList={[
              "Free breakfast",
              "Free internet",
              "Free cancellation",
            ]}
            pricePerNight="6,160"
            hasDeal
          />

          <StayProviderItem
            logoImageUrl="https://content.r9cdn.net/rimg/provider-logos/hotels/h/BOOKINGDOTCOM.png?crop=false&width=88&height=31&fallback=default2.png&_v=9d698de13331f20432214de1f7f5fab5"
            featuresList={[
              "Free breakfast",
              "Free internet",
              "Free cancellation",
            ]}
            pricePerNight="6,720"
          />

          <StayProviderItem
            logoImageUrl="https://content.r9cdn.net/rimg/provider-logos/hotels/h/AGODA.png?crop=false&width=88&height=31&fallback=default1.png&_v=3511c643bb89f78ef64ea30307c487bb"
            featuresList={[
              "Free breakfast",
              "Free internet",
              "Free cancellation",
            ]}
            pricePerNight="6,160"
          />
        </div>
      </div>
    </div>
  );
}
