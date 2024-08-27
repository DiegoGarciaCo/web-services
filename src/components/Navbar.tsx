import NavLinks from "./NavLinks";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex content-center justify-center sticky top-0 w-full h-20 bg-transparent items-center px-5">
      {/* left logo and links container */}
      <div className="flex space-x-5 text-white items-center w-3/4 justify-around">
        <h1 className="text-2xl px-5">Logo</h1>
        <NavLinks />
      </div>
      {/* Right button */}
      <div className="flex items-center w-1/4">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
          type="button"
          onClick
          text="Contact"
        />
      </div>
    </nav>
  );
}
