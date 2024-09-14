import { auth } from "@/auth";
import DashboardCard from "@/components/DashboardCard";
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
    <section className="container grid grid-cols-2 md:grid-cols-12 md:grid-rows-12 gap-4 py-5 md:max-h-screen">
      <div className="md:col-span-3 md:row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <DashboardCard
          title="Contacts This Month"
          data={data.contactsThisMonth}
          percentage={
            isNaN((data.contactsLastMonth / data.contactsThisMonth) * 100)
              ? 0
              : (data.contactsLastMonth / data.contactsThisMonth) * 100
          }
        />
      </div>
      <div className="md:col-span-3 md:row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <DashboardCard
          title="Contacts Last Month"
          data={data.contactsLastMonth}
          percentage={
            isNaN((data.contactsTwoMonthsAgo / data.contactsLastMonth) * 100)
              ? 0
              : (data.contactsTwoMonthsAgo / data.contactsLastMonth) * 100
          }
        />
      </div>
      <div className="md:col-span-3 md:row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <DashboardCard
          title="Subcriptions This Month"
          data={data.subscriptionsThisMonth}
          percentage={
            isNaN(
              (data.subscriptionsLastMonth / data.subscriptionsThisMonth) * 100
            )
              ? 0
              : (data.subscriptionsLastMonth / data.subscriptionsThisMonth) *
                100
          }
        />
      </div>
      <div className="md:col-span-3 md:row-span-3 border-2 border-slate-200 rounded-xl p-5">
        <DashboardCard
          title="Subcriptions Last Month"
          data={data.subscriptionsLastMonth}
          percentage={
            isNaN(
              (data.subscriptionsTwoMonthsAgo / data.subscriptionsLastMonth) *
                100
            )
              ? 0
              : (data.subscriptionsTwoMonthsAgo / data.subscriptionsLastMonth) *
                100
          }
        />
      </div>
      <div className="md:col-span-7 md:row-span-9 col-span-2 border-2 border-slate-200 rounded-xl">
        <DashboardChart />
      </div>
      <div className="md:col-span-5 md:row-span-9 col-span-2 border-2 border-slate-200 rounded-xl">
        <DashboardTable />
      </div>
    </section>
  );
}
