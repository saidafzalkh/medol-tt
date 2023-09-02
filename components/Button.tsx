import Link from "next/link";

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
