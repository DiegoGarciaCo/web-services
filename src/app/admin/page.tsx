import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return <h1>Dashboard Page</h1>;
}
