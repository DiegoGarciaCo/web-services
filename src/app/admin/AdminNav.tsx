import { signOut } from "@/auth";
import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="flex items-center justify-around dark p-6">
      <h2 className="text-4xl uppercase">Logo</h2>
      <ul className="flex items-center gap-4 w-1/3">
        <li>
          <Link href="/admin">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/admin/newsletters">Subscriptions</Link>
        </li>
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="btn">Sign Out</button>
      </form>
    </nav>
  );
}
