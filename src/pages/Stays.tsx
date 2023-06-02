import { SideNav } from "../components/stays-page/SideNav";
import { StaysContent } from "../components/stays-page/StaysContent";
import { StaysHeader } from "../components/stays-page/StaysHeader";

export function StaysPage() {
  return (
    <div>
      <StaysHeader />
      <StaysContent />
      <SideNav />
    </div>
  );
}
