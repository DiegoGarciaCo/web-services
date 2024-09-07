import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Contacts() {
  const session = await auth();
  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/admin/contacts");
  }
  return <h1>Contacts Page</h1>;
}
