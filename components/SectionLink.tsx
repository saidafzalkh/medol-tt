import Link from "next/link";

import Icons from "./Icons";

export default function SectionLink({ text }: { text: string }) {
  return (
    <Link href="#" className="show-more">
      {text} <Icons.slideRight size={30} />
    </Link>
  );
}
