import Link from "next/link";
import { HTMLAttributes } from "react";

interface Props {
  link?: string;
  text: string;
}

export default function ButtonLink(props: Props) {
  return (
    <Link className="primary-button" href={props.link || "#"}>
      {props.text}
    </Link>
  );
}

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton({ children, ...props }: buttonProps) {
  return (
    <button {...props} className={`primary-button ${props.className}`}>
      {children}
    </button>
  );
}
