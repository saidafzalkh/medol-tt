import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export default function Title({ children, ...props }: Props) {
  return (
    <h2 className={`section-title ${props.className}`} {...props}>
      {children}
    </h2>
  );
}
