"use client";

interface CheckBoxProps {
  id: string;
  action: any;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, action }) => {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <input
        type="checkbox"
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
      />
    </form>
  );
};

export default CheckBox;
