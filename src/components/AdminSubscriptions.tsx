import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSubscriptions } from "@/lib/data";

export default async function AdminSubs() {
  // Fetch all contacts
  const data = await getSubscriptions();

  return (
    <section className="min-h-screen">
      <Table>
        <TableCaption>A list of your recent Leads.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Subscribed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ email, id }) => (
            <TableRow key={id}>
              <TableCell>{email}</TableCell>
              <TableCell className="text-right">
                <input type="checkbox" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
