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
import CheckBox from "./CheckBox";
import { updateNewsletterTable } from "@/lib/actions";

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
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ email, id }) => (
            <TableRow key={id} id={id}>
              <TableCell>{email}</TableCell>
              <TableCell className="text-right">
                <CheckBox id={id} action={updateNewsletterTable} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
