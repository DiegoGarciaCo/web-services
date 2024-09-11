"use client";

import { deleteContact } from "@/lib/actions";

interface CheckBoxProps {
  id: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id }) => {
  return (
    <form action={deleteContact}>
      <input type="hidden" name="id" value={id} />
      <input type="checkbox" onChange={(e) => e.currentTarget.form?.submit()} />
    </form>
  );
};

export default CheckBox;
