import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Newsletters() {
  const session = await auth();
  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/admin/newsletters");
  }
  return <h1>Newsletters Page</h1>;
}
