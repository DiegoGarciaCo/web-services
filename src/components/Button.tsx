import { buttonProps } from "@/lib/definitions";

export default function Button({
  buttonStyle,
  buttonSize,
  type,
  onClick,
  text,
}: buttonProps) {
  return (
    <button
      className={`btn ${buttonSize} ${buttonStyle}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
