import Icons from "./Icons";

interface Props {
  className?: string;
  onClick?: () => {};
}

export function ArrowNext(props: Props) {
  return (
    <div className={`arrows ${props.className}`} onClick={props.onClick}>
      <Icons.arrowRight />
    </div>
  );
}

export function ArrowPrev(props: Props) {
  return (
    <div className={`arrows ${props.className}`} onClick={props.onClick}>
      <Icons.arrowLeft />
    </div>
  );
}
