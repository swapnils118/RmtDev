import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
  onClick: (direction: "next" | "previous") => void;
};

export default function PaginationControls({
  onClick,
}: PaginationControlsProps) {
  return (
    <section onClick={() => onClick("previous")} className="pagination">
      <button className="pagination__button">
        <ArrowLeftIcon />
        Page 1
      </button>
      <button onClick={() => onClick("next")} className="pagination__button">
        Page 3
        <ArrowRightIcon />
      </button>
    </section>
  );
}
