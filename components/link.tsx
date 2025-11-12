interface LinkProps {
  title: string;
  onClick?: () => void;
}

export default function Link({ title, onClick }: LinkProps) {
  return (
    <li className="first:text-[#4FC3F7] text-white text-lg font-semibold">
      <a
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        href={`#${title.toLowerCase()}`}
      >
        {title}
      </a>
    </li>
  );
}
