import { dashboardCardProps } from "@/lib/definitions";

export default function DashboardCard({
  title,
  data,
  percentage,
}: dashboardCardProps) {
  return (
    <>
      <h2 className="text-sm capitalize font-medium">{title}</h2>
      <p className="text-3xl font-bold pt-2">+{data}</p>
      <p className="text-slate-400 text-sm">
        {percentage}% change from last month
      </p>
    </>
  );
}
