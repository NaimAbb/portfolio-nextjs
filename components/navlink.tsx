import { MAIN_NAVIGATION } from "@/data";
import Link from "./link";

export default function NavLink() {
  return (
    <nav className="flex-1 justify-center hidden md:flex">
      <ul className="flex gap-10">
        {MAIN_NAVIGATION.map((item) => (
          <Link key={item} title={item} />
        ))}
      </ul>
    </nav>
  );
}
