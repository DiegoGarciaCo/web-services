import { ReactNode } from "react";

export type buttonProps = {
  buttonStyle: string;
  buttonSize: string;
  type: "submit" | "button";
  onClick?: any;
  text: ReactNode;
};

export type navLinks = {
  path: string;
  name: string;
};

export interface ErrorObject {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export interface chartData {
  month: string;
  year: number;
  contactsCount: number;
  subscriptionsCount: number;
}
