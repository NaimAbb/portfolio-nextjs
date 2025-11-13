import { handleClickDwonlaodCV } from "@/util/helpers";
import { useSelector } from "react-redux";

interface LinkProps {
  title: string;
  onClick?: () => void;
}

export default function Link({ title, onClick }: LinkProps) {
  const currentActive = useSelector((state: any) => state.app.activeNavLink);
  return (
    <li
      className={`${
        currentActive.toLowerCase() === title.toLowerCase()
          ? "text-[#4FC3F7]"
          : "text-white"
      } text-lg font-semibold`}
    >
      <a
        onClick={(event) => {
          if (onClick) {
            onClick();
          }
          if (title === "Resume") {
            event.preventDefault();
            handleClickDwonlaodCV();
          }
        }}
        href={`#${title.toLowerCase()}`}
      >
        {title}
      </a>
    </li>
  );
}
