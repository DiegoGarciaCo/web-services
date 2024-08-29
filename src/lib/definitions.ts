import { ReactNode } from "react";

export type buttonProps = {
  buttonStyle: string;
  buttonSize: string;
  type: "submit" | "button";
  onClick: any;
  text: ReactNode;
};

export type navLinks = {
  path: string;
  name: string;
};
