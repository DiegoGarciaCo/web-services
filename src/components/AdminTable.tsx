import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getContacts } from "@/lib/data";
import CheckBox from "./CheckBox";
import { formatPhoneNumber } from "@/lib/utils";

export default async function AdminTable() {
  // Fetch all contacts
  const data = await getContacts();

  return (
    <section className="min-h-screen">
      <Table>
        <TableCaption>A list of your recent Leads.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ name, email, phone, id }) => (
            <TableRow key={id} id={id}>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{formatPhoneNumber(phone)}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell className="text-right">
                <CheckBox id={id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
