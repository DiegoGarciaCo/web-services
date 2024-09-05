export default function AdminNav() {
  return (
    <nav className="flex items-center justify-around dark p-6">
      <h2 className="text-4xl uppercase">Logo</h2>
      <ul className="flex items-center justify-evenly w-1/3">
        <li>
          <a href="/admin">Dashboard</a>
        </li>
        <li>
          <a href="/admin/contact">Contacts</a>
        </li>
        <li>
          <a href="/admin/newsletter">Newsletters</a>
        </li>
      </ul>
    </nav>
  );
}
