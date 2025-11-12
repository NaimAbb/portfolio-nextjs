import Button from "@/components/button";
import Link from "next/link";
import { MdOutlineError } from "react-icons/md";

export default function NotFoundPublic() {
  return (
    <div className="h-[calc(100vh-88px)] flex flex-col gap-5 items-center justify-center">
      <MdOutlineError size={80} color="red" />
      <p className="text-[#4FC3F7] font-extrabold text-2xl">
        Not Found Page 404
      </p>
      <Button tag={Link} href="/" styleButton="px-12 py-2 rounded-[10px]">
        Back to Home
      </Button>
    </div>
  );
}
