interface LinkProps {
  title: string;
}

export default function Link({ title }: LinkProps) {
  return (
    <li className="first:text-[#4FC3F7] text-white text-lg font-semibold">
      <a href={`#${title.toLowerCase()}`}>{title}</a>
    </li>
  );
}
