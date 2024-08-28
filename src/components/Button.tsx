import { buttonProps } from "@/lib/definitions";

export default function Button({
  buttonStyle,
  buttonSize,
  type,
  onClick,
  text,
}: buttonProps) {
  const STYLES: string[] = ["btn--primary", "btn--outline", "btn--nav"];
  const SIZE: string[] = ["btn--small", "btn--medium", "btn--large"];

  const checkButtonStyle: string = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize: string = SIZE.includes(buttonSize)
    ? buttonSize
    : SIZE[1];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
