import NavLinks from "./NavLinks";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex content-center justify-center sticky">
      {/* left logo and links container */}
      <div className="flex justify-around">
        <h1>Logo</h1>
        <NavLinks />
      </div>
      {/* Right button */}
      <div className="flex justify-end">
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
