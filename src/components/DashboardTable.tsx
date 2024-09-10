import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getLatestContacts } from "@/lib/data";

export default async function DashboardTable() {
  // Fetch the 7 latest contacts
  const data = await getLatestContacts();

  return (
    <Table>
      <TableCaption>A list of your recent Leads.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Contacted</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ name, email, phone, id }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell className="text-center">
              <input type="checkbox" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
