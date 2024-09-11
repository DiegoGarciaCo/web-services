import { auth } from "@/auth";
import DashboardChart from "@/components/DashboardChart";
import DashboardTable from "@/components/DashboardTable";
import { getDashboardData } from "@/lib/data";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // Redirect to the login page if the user is not authenticated
  const session = await auth();
  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/admin");
  }

  // Fetch the dashboard data
  const data = await getDashboardData();

  return (
    <section className="container grid grid-cols-12 grid-rows-12 gap-4 py-5 max-h-screen">
      <div className="col-span-3 row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <h2 className="text-sm capitalize font-medium">Contacts This Month</h2>
        <p className="text-3xl font-bold pt-2">+{data.contactsThisMonth}</p>
        <p className="text-slate-400 text-sm">
          {isNaN((data.contactsLastMonth / data.contactsThisMonth) * 100)
            ? 0
            : (data.contactsLastMonth / data.contactsThisMonth) * 100}
          % from last month
        </p>
      </div>
      <div className="col-span-3 row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <h2 className="text-sm capitalize font-medium">Contacts Last Month</h2>
        <p className="text-3xl font-bold pt-2">+{data.contactsLastMonth}</p>
        <p className="text-slate-400 text-sm">
          {isNaN((data.contactsTwoMonthsAgo / data.contactsLastMonth) * 100)
            ? 0
            : (data.contactsTwoMonthsAgo / data.contactsLastMonth) * 100}
          % from last month
        </p>
      </div>
      <div className="col-span-3 row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <h2 className="text-sm capitalize font-medium">
          Subcriptions This Month
        </h2>
        <p className="text-3xl font-bold pt-2">
          +{data.subscriptionsThisMonth}
        </p>
        <p className="text-slate-400 text-sm">
          {isNaN(
            (data.subscriptionsLastMonth / data.subscriptionsThisMonth) * 100
          )
            ? 0
            : (data.subscriptionsLastMonth / data.subscriptionsThisMonth) * 100}
          % from last month
        </p>
      </div>
      <div className="col-span-3 row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <h2 className="text-sm capitalize font-medium flex justify-between">
          Subcriptions Last Month
        </h2>
        <p className="text-3xl font-bold pt-2">
          +{data.subscriptionsLastMonth}
        </p>
        <p className="text-slate-400 text-sm">
          {isNaN(
            (data.subscriptionsTwoMonthsAgo / data.subscriptionsLastMonth) * 100
          )
            ? 0
            : (data.subscriptionsTwoMonthsAgo / data.subscriptionsLastMonth) *
              100}
          % from last month
        </p>
      </div>
      <div className="col-span-7 row-span-9 border-2 border-slate-200 rounded-xl">
        <DashboardChart />
      </div>
      <div className="col-span-5 row-span-9 border-2 border-slate-200 rounded-xl">
        <DashboardTable />
      </div>
    </section>
  );
}
