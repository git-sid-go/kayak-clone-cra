import logo from "../../assets/kayak-logo.svg";

export function StaysHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 p-3 py-8 pl-24 shadow-md bg-white z-40">
      <img src={logo} alt="logo" />
    </div>
  );
}
