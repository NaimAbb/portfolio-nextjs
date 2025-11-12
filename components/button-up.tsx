"use client";

import { useCustomScroll } from "@/hooks/use-custom-scroll";
import { scrollUp } from "@/util/helpers";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function ButtonUp() {
  const isShowBtn = useCustomScroll(200);
  return (
    <button
      onClick={scrollUp}
      className={`w-10 h-10 rounded-full bg-[#4FC3F7] flex items-center justify-center fixed bottom-5 end-5 z-[500] transition-transform duration-300 outline-none ${
        isShowBtn ? "translate-y-0" : " translate-y-24"
      }`}
    >
      <FaLongArrowAltUp color="white" />
    </button>
  );
}
