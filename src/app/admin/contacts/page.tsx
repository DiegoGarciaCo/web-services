import { auth } from "@/auth";
import AdminTable from "@/components/AdminTable";
import { redirect } from "next/navigation";

export default async function Contacts() {
  const session = await auth();
  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/admin/contacts");
  }
  return (
    <section className="p-5">
      <h1 className="text-2xl font-bold text-center">Contacts</h1>
      <div>
        <AdminTable />
      </div>
    </section>
  );
}
