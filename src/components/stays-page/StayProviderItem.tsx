import { Check, ChevronRight } from "lucide-react";

export function StayProviderItem({
  logoImageUrl,
  featuresList,
  pricePerNight,
  hasDeal,
}: {
  logoImageUrl: string;
  featuresList: string[];
  pricePerNight: string;
  hasDeal?: boolean;
}) {
  return (
    <div className="flex border-t border-t-slate-200 py-3">
      <img className="h-full mr-9" src={logoImageUrl} alt="agoda" />
      <div className="text-xs space-y-0.5 mr-32">
        {featuresList.map((feature) => (
          <div key={feature} className="flex">
            <Check size={16} className="mr-1" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center text-right">
          <div>
            <div
              className={`text-stay-title font-bold leading-none ${
                hasDeal ? "text-green-700" : ""
              }`}
            >
              ₹ {pricePerNight}
            </div>
            <div className="text-xxs font-light mt-0.5">for 1 night</div>
          </div>
          {!hasDeal && (
            <ChevronRight color="#e8381b" size={16} className="ml-1" />
          )}
        </div>

        {hasDeal && (
          <button className="text-white bg-orange-600 rounded-md px-4 py-1 font-bold text-sm mt-1">
            View Deal
          </button>
        )}
      </div>
    </div>
  );
}
